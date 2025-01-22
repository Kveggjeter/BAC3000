import './assets/styles/styles.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer} from "react-leaflet";

export default function App() {
    return (
        <MapContainer center ={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )
}

/*

Esri:
<TileLayer
  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
/>

Open Street Maps:
<TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

CartoDB Dark Matter: Svart-kart
<TileLayer
  attribution='© OpenStreetMap contributors &copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
/>

CartoDB Positron: Hvit-kart
<TileLayer
  attribution='© OpenStreetMap contributors &copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>

import './styles.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer} from "react-leaflet";

const App: React.FC = () => {
    // NASA GIBS Viirs Earth At Night 2012 kartlag
    const nasaTileLayerUrl =
        "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg";

    // Definer `time`-variabelen
    const timeValue = "default"; // Velg en gyldig dato eller bruk "default"
    const tilematrixsetValue = "GoogleMapsCompatible_Level";

    return (
        <MapContainer
            center={[0, 0]} // Senter kartet på koordinater (0, 0)
            zoom={2} // Start med zoom-nivå 2
            style={{ height: "100vh", width: "100%" }} // Fullskjerm-stil
        >
            <TileLayer
                url={nasaTileLayerUrl
                    .replace("{time}", timeValue)
                    .replace("{tilematrixset}", tilematrixsetValue)
                    .replace("{maxZoom}", "8")
                    .replace("{format}", "jpg")}
                attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                bounds={[
                    [-85.0511287776, -179.999999975],
                    [85.0511287776, 179.999999975],
                ]}
                minZoom={1}
                maxZoom={8}
            />
        </MapContainer>
    );
};

export default App;

/*

Esri:
<TileLayer
  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
/>

Open Street Maps:
<TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

CartoDB Dark Matter: Svart-kart
<TileLayer
  attribution='© OpenStreetMap contributors &copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
/>

CartoDB Positron: Hvit-kart
<TileLayer
  attribution='© OpenStreetMap contributors &copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>


 */

