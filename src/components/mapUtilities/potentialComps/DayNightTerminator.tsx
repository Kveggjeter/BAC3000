import { useEffect, useRef} from 'react';
import { useMap } from 'react-leaflet';
import terminator from '@joergdietrich/leaflet.terminator';
import type { Terminator } from '@joergdietrich/leaflet.terminator';

export default function DayNightTerminator({ onPolygonChange }: {
    onPolygonChange?: (coords: L.LatLng[][]) => void;
}) {
    const map = useMap();
    const layerRef = useRef<Terminator | null>(null);

    useEffect(() => {
        if (!map) return;

        layerRef.current = terminator({
            weight: 1,
            fillColor: 'black',
            fillOpacity: 0.4
        });

        layerRef.current.addTo(map);

        const intervalId = setInterval(() => {
            layerRef.current?.setTime();
            if (onPolygonChange && layerRef.current) {
                const latLngs = layerRef.current.getLatLngs?.();
                if (latLngs) {
                    onPolygonChange(latLngs as L.LatLng[][]);
                }
            }
        }, 120_000);

        if (onPolygonChange && layerRef.current) {
            const latLngs = layerRef.current.getLatLngs?.();
            latLngs && onPolygonChange(latLngs as L.LatLng[][]);
        }

        return () => {
            clearInterval(intervalId);
            layerRef.current?.removeFrom(map);
            layerRef.current = null;
        };
    }, [map, onPolygonChange]);

    return null;
}
