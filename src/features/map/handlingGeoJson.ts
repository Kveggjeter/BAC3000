/*
import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
// @ts-expect-error
import { data } from '../../assets/data/countries.js';

export default function GeoJsonComp() {
    const map = useMap();

    useEffect(() => {
        const options = {
            filter: (feature) => feature.properties.ADMIN === 'United States of America',
            style: {
                fillColor: '#1EB300',
                color: '#F2FF00',
            },
        };

        const layer = L.geoJson(data, options);

        layer.addTo(map);
        return () => {
            map.removeLayer(layer);
        };
    }, [map]);

    return null;
}

 */

/*
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import geojsonvt from 'geojson-vt';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { data } from "../../assets/data/countries.js";

export default function GeoJsonComp() {
  const map = useMap();

  useEffect(() => {
    // Her kan du for eksempel kjøre data gjennom geojson-vt
    // ... f.eks. const tileIndex = geojsonvt(data);

    // Opprett et lag. Her bruker du geoJson i stedet for å returnere det direkte
    const options = {
      maxZoom: 16,
      tolerance: 3,
      debug: 0,
      style: {
        fillColor: '#1EB300',
        color: '#F2FF00',
      },
    };
    const layer = L.geoJson(data, options);

    // Legg laget til på kartet
    layer.addTo(map);

    // Rydd opp hvis komponenten unmountes
    return () => {
      map.removeLayer(layer);
    };
  }, [map]);

  // Returnerer ingen JSX – side-effekten håndterer alt Leaflet-arbeid
  return null;
}

 */

/*
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import * as turf from '@turf/turf';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { data } from '../../assets/data/countries.js';

export default function GeoJsonComp() {
    const map = useMap();
    // To remember what polygon is active
    const highlightLayerRef = useRef<L.GeoJSON | null>(null);


useEffect(() => {
    function onMapClick(e: L.LeafletMouseEvent) {
        if (highlightLayerRef.current) {
            map.removeLayer(highlightLayerRef.current);
            highlightLayerRef.current = null;
        }

        const { lat, lng } = e.latlng;
        const point = turf.point([lng, lat]);


        for (const feature of data.features) {
            if (turf.booleanPointInPolygon(point, feature)) {
                const layer = L.geoJson(feature, {
                    style: {
                        fillColor: '#ABD2FA',
                        fillOpacity: 0.001,
                        color: 'white',
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

 */
