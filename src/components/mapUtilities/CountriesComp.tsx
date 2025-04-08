import L from 'leaflet';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {useMap} from 'react-leaflet';
import * as turf from '@turf/turf';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {data} from '../../assets/data/countries.js';
import "../../assets/styles/countryStat.css";
import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GetArticles} from "../../services/getArticles.tsx";
import {GetCountryNum} from "../../services/getCountryNum.tsx";
import {dragElement} from "../../features/map/dragFact.ts";


export default function CountriesComp() {
    const map = useMap();
    const [articles, setArticles] = useState<ArticleData[]>([]);
    const countriesRef = useRef<HTMLDivElement | null>(null);

    // To remember what polygon is active
    const country: MutableRefObject<string> = useRef("");
    const count: MutableRefObject<number> = useRef(0);
    const highlightLayerRef = useRef<L.GeoJSON | null>(null);
    const [returnFact, setReturnFact] = useState<GeoJSON.Feature | null>(null);

    useEffect(() => {
        GetArticles()
            .then((result) => setArticles(result))
            .catch((error) => console.error("Error fetching articles:", error));
    }, []);

    /**
     * Removes the previous highlight, adds a new highlight.
     */
    useEffect(() => {
        async function onMapClick(e: L.LeafletMouseEvent) {

            if (highlightLayerRef.current) {
                map.removeLayer(highlightLayerRef.current);
                map.panTo(e.latlng);
                highlightLayerRef.current = null;
            }

            setReturnFact(null);
            const {lat, lng} = e.latlng;
            const point = turf.point([lng, lat]);

            /**
             * Iterate countries in the GeoJson. Connecting each feature from turf with relevant data points.
             * If true, new layer is made that showcases the polygon that matches the points.
             * TODO: Remove the styling from here? Just having it here temporarily for future reference, as this part WILL be rewritten
             */
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
                    const tall: number = await GetCountryNum(country.current);
                    let usTall: number = 0;
                    let us: string = country.current;
                    if (country.current == "United States") {
                        us = "USA";
                        usTall = await GetCountryNum(us);
                    }
                    count.current = tall + usTall;
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
    }, [map, articles]);

    useEffect(() => {
        if (returnFact && countriesRef.current) {
            dragElement(countriesRef.current);
        }
    }, [returnFact]);
    return (
        <>
            {returnFact && (
                <div className="countries" id="countries" ref={countriesRef}>
                    <span className="country" id="country">{country.current}</span>
                    <div className="aNumCon">
                        <span className="newsNow">Articles: </span>
                        <span className="newsNum">{count.current}</span>
                    </div>
                </div>
            )}
        </>
    );
}
