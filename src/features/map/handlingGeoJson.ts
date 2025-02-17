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
