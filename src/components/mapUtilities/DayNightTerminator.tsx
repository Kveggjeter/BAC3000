import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import terminator from '@joergdietrich/leaflet.terminator';
import type { Terminator } from '@joergdietrich/leaflet.terminator';

/**
 * Added purely as a TS workaround. Might find another way, but the 13-year-old library was pretty dope.
 * @constructor
 */
export default function DayNightTerminator() {
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
        }, 120_000);

        return () => {
            clearInterval(intervalId);
            if (layerRef.current) {
                layerRef.current.removeFrom(map);
                layerRef.current = null;
            }
        };
    }, [map]);

    return null;
}
