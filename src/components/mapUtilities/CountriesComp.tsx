import L from 'leaflet';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {useMap} from 'react-leaflet';
import * as turf from '@turf/turf';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {data} from '../../assets/data/countries.js';
import "../../assets/styles/countryStat.css";
import {GetCountryNum} from "../../services/GetCountryNum.tsx";
import {ArticleFacts} from "../../assets/types/news/ArticleFacts.ts";

/**
 * This the component responsible for giving functionality and clickaility to each country on the map.
 *
 * When the user clicks on a country, the country gets identifies with Turf.js for polygon-matching and the GeoJSON in {@link countries.js}.
 * The components main task is to make an interactable polygon based on each country and giving statistics
 * and highlights the country clicked. The statistic includes a total for each article, count of articles per category,
 * most reported city and most reported source.
 *
 * Functionality:
 * - Makes polygon of each country
 * - Matching clicks with polygon
 * - Fetching information about each country
 * - Showing popup with statistic
 *
 * The popup is placed with an absolute position in the middle.
 *
 * @component
 */
export default function CountriesComp() {

    const map = useMap();
    const [articleFacts, setArticleFacts] = useState<ArticleFacts | null>(null);
    const countriesRef = useRef<HTMLDivElement | null>(null);
    const country: MutableRefObject<string> = useRef("");
    const highlightLayerRef = useRef<L.GeoJSON | null>(null);
    const [returnFact, setReturnFact] = useState<GeoJSON.Feature | null>(null);

    const handleHighlightLayer = (): boolean => {
        if (highlightLayerRef.current) {
            map.removeLayer(highlightLayerRef.current);
            highlightLayerRef.current = null;
            return true;
        }
        return false;
    }

    const handleClose = () => {
        handleHighlightLayer()
        setReturnFact(null);
        setArticleFacts(null);
    }

    useEffect(() => {
        if (countriesRef.current) {
            L.DomEvent.disableClickPropagation(countriesRef.current);
        }
    }, [returnFact])

    useEffect(() => {
        async function onMapClick(e: L.LeafletMouseEvent) {

            if(handleHighlightLayer()) {
                map.panTo(e.latlng);
            }
            setArticleFacts(null);
            setReturnFact(null);
            const {lat, lng} = e.latlng;
            const point = turf.point([lng, lat]);


            for (const feature of data.features) {
                if(!feature.geometry) continue;
                if (turf.booleanPointInPolygon(point, feature)) {
                    const layer = L.geoJson(feature, {
                        style: {
                            fillColor: '#ABD2FA',
                            fillOpacity: 0.001,
                            color: '#ABD2FA',
                            weight: 2,
                        },
                    });

                    country.current = feature.properties.ADMIN;
                    await GetCountryNum(country.current)
                        .then((result) => setArticleFacts(result))
                        .catch((error) => console.error(error));

                    layer.addTo(map);
                    highlightLayerRef.current = layer;
                    setReturnFact(feature);
                    break;
                }
            }
        }
        map.on('click', onMapClick);
        return () => {
            map.off('click', onMapClick);

        };
    }, [map]);

    return (
        <>
            {returnFact && (
                <div className="countries" id="countries" ref={countriesRef}>
                    <a className="countryPopupCloseButton" role="button" onClick={handleClose}>x</a>
                    <span className="country" id="country">{country.current}</span>
                    {articleFacts && (
                        <>
                            {articleFacts.articleCount > 0 ? (
                                <>
                                <div className="aNumCon" id="articleCount">
                                    <span className="newsNow" id="categoryNews">Articles: </span>
                                    <span className="newsNum" >{articleFacts.articleCount}</span>
                                </div>
                            <div className="aNumCon" id="newsCategory">
                                <span className="newsNum" id="categoryNews">Categories</span>
                            </div>
                            {articleFacts.businessCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Business: </span>
                                    <span className="newsNum">{articleFacts.businessCategoryCount}</span>
                                </div>
                                )}
                            {articleFacts.crimeCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Crime: </span>
                                    <span className="newsNum">{articleFacts.crimeCategoryCount}</span>
                                </div>
                                )}
                            {articleFacts.cultureCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Culture: </span>
                                    <span className="newsNum">{articleFacts.cultureCategoryCount}</span>
                                </div>
                                )}
                            {articleFacts.politicsCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Politics: </span>
                                    <span className="newsNum">{articleFacts.politicsCategoryCount}</span>
                                </div>
                                )}
                            {articleFacts.scienceCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Science: </span>
                                    <span className="newsNum">{articleFacts.scienceCategoryCount}</span>
                                </div>
                                )}
                            {articleFacts.sportsCategoryCount > 0 && (
                                <div className="aNumCon">
                                    <span className="newsNow">Sports: </span>
                                    <span className="newsNum">{articleFacts.sportsCategoryCount}</span>
                                </div>
                                )}
                            <div className="aNumCon" id="commonCategory">
                                <span className="newsNum" id="categoryNews">Common</span>
                            </div>
                            {articleFacts.cityWithMostCoverage != null &&
                                (
                                <div className="aNumCon">
                                    <div className="tellers">
                                        <span className="newsNow" id="tellers">Most reported city </span>
                                    </div>
                                    <span className="newsNum" id="mostNewsCoverage">{articleFacts.cityWithMostCoverage[0].toUpperCase()
                                        + articleFacts.cityWithMostCoverage.slice(1)}
                                    </span>
                                </div>
                            )}
                            {articleFacts.mostFrequentNewsSource != null && (
                                <div className="aNumCon">
                                    <div className="tellers">
                                        <span className="newsNow" id="tellers">Most popular source </span>
                                    </div>
                                    <span className="newsNum" id="mostNewsCoverage">{articleFacts.mostFrequentNewsSource[0].toUpperCase()
                                    + articleFacts.mostFrequentNewsSource.slice(1)}
                                    </span>
                                </div>
                            )}
                                </>
                        ) : (
                            <>
                                <div className="aNumCon" id="newsCategory">
                                    <span className="newsNum" id="categoryNews">No articles yet for {country.current}</span>
                                </div>
                            </>
                            )
                            }
                        </>
                    )}
                </div>
            )}

        </>
    );
}
