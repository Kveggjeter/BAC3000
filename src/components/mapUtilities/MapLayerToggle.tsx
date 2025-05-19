import { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import L, { TileLayer } from 'leaflet';

export default function MapLayerToggle() {
    const map = useMap();
    const [isLight, setIsLight] = useState(true);

    const lightLayerRef = useRef<TileLayer | null>(null);
    const darkLayerRef = useRef<TileLayer | null>(null);
    const currentLayerRef = useRef<TileLayer | null>(null);

    useEffect(() => {
        if (!lightLayerRef.current) {lightLayerRef.current = L.tileLayer(
                'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
                { attribution: '&copy; OpenStreetMap contributors' });
        }
        if (!darkLayerRef.current) {
            darkLayerRef.current =
                L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=Iec7Dc3SZlSiI8kUpdY7m4ARDo4NQqGHpKr0upWdlHb3TY7638UgTm4K9v43kJ4c',
                { attribution: '© OpenStreetMap contributors &copy; Stadia Maps' });
        }
        if (currentLayerRef.current) { map.removeLayer(currentLayerRef.current ); }
        const newLayer = isLight ? lightLayerRef.current : darkLayerRef.current;
        if (newLayer) {
            newLayer.addTo(map);
            currentLayerRef.current = newLayer;
        }
    }, [isLight, map]);

    return (
        <div className="mapLayerToggle">
            <button className={
                `mapLayerBtn ${isLight ? 'light' : 'dark'}`}
                    onClick={() => setIsLight(prev => !prev)}>
                {isLight ? 'Dark' : 'Light'}
            </button>
        </div>
    );
}
