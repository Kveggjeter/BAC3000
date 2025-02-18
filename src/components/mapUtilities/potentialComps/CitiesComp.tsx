import { useMap } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { polygon as turfPolygon, point as turfPoint } from '@turf/helpers';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import yellow from '../../../assets/images/yellow.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { cityData as data } from '../../../assets/data/cities.js';

export default function CitiesComp({ polygonCoords }: { polygonCoords: L.LatLng[][] | null }) {
    const map = useMap();
    const [layer, setLayer] = useState<L.GeoJSON | null>(null);

    useEffect(() => {
        if (!map || !polygonCoords) return;

        const latLngArray = polygonCoords[0];
        const coordsInGeoJSONFormat = latLngArray.map((ll) => [ll.lng, ll.lat]);
        coordsInGeoJSONFormat.push(coordsInGeoJSONFormat[0]); // lukke polygonet
        const terminatorPoly = turfPolygon([coordsInGeoJSONFormat]);

        const filteredFeatures = {
            type: 'FeatureCollection',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            features: data.features.filter((f) => {
                const lat = f.properties.LATITUDE;
                const lng = f.properties.LONGITUDE;
                if (!lat || !lng) return false;

                const cityPoint = turfPoint([lng, lat]);
                return booleanPointInPolygon(cityPoint, terminatorPoly);
            }),
        };

        if (layer) {
            map.removeLayer(layer);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const newLayer = L.geoJson(filteredFeatures, {
            pointToLayer: (feature, latlng) => {
                const pop = feature.properties.POP_MAX || 0;
                const iconSize = pop > 2_000_000 ? [90, 90] : pop > 300_000 ? [60, 60] : [30, 30];


                const customIcon = new Icon({
                    iconUrl: yellow,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    iconSize,
                });
                return L.marker(latlng, { icon: customIcon });
            },
        });
        newLayer.addTo(map);
        setLayer(newLayer);

        return () => {
            newLayer.removeFrom(map);
        };
    }, [map, polygonCoords]);

    return null;
}
