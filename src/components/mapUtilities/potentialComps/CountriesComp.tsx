import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import * as turf from '@turf/turf';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { data } from '../../../assets/data/countries.js';

export default function CountriesComp() {
    const map = useMap();
    // To remember what polygon is active
    const highlightLayerRef = useRef<L.GeoJSON | null>(null);

    /**
     * Removes the previous highlight, adds a new highlight.
     */
    useEffect(() => {
        function onMapClick(e: L.LeafletMouseEvent) {
            if (highlightLayerRef.current) {
                map.removeLayer(highlightLayerRef.current);
                highlightLayerRef.current = null;
            }

            const { lat, lng } = e.latlng;
            const point = turf.point([lng, lat]);

            /**
             * Iterate countries in the GeoJson. Connecting each feature from turf with relevant data points.
             * If true, new layer is made that showcases the polygon that matches the points.
             * TODO: Remove the styling from here? Just having it here temporarily for future reference, as this part WILL be rewritten
             */
            for (const feature of data.features) {
                if (turf.booleanPointInPolygon(point, feature)) {
                    const layer = L.geoJson(feature, {
                        style: {
                            fillColor: '#ABD2FA',
                            fillOpacity: 0.001,
                            color: '#ABD2FA',
                            weight: 2,
                        },
                    });
                    layer.addTo(map);
                    highlightLayerRef.current = layer;
                    break;
                }
            }
        }
        map.on('click', onMapClick);
        return () => {
            map.off('click', onMapClick);
        };
    }, [map]);
    return null;
}
