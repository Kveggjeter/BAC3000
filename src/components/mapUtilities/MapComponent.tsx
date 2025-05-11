import {useState} from "react";
import MapTools from "./MapTools.tsx";
import "leaflet/dist/leaflet.css";
import '../../assets/styles/styles.css'
import {MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import L, {divIcon, point} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {Cluster} from "../../assets/types/map/Cluster.ts";
import CountriesComp from "./CountriesComp.tsx";
import {MarkerData} from "../../assets/types/map/SetMarkerProps.ts";
import {Legend} from "./Legend.tsx";

/**
 * Map component, decides how everything will look like and what attributes they should have.
 *
 * The component creates a map with Leaflet, uses MapTools for fetching the news-articles and applying the relevant
 * filters and creates polygon for each country wih CountriesComp.
 * The React library for Leaflet is quite literal, so to change out some values to make the map behave differently,
 * you simply add behaviours inside the <MapContainer>-tag or modify what-ever is there. The same goes for
 * the clusters.
 *
 * The clusters define the zoom before the makers become collected under one "cluster". Used to better
 * group the elements.
 */
export default function MapComponent() {
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    /**
     * Cluster for icons (to bring several markers together)
     * @param cluster
     */
    const createCustomClusterIcon = (cluster: Cluster) => {
        return divIcon({
            html:
                `<div class="clusterIcon"><div class="clusterBox">
                        ${cluster.getChildCount()}             
                 </div></div>`,
            className: "custom-marker-cluster",
            iconSize: point(66, 66, true),
        });
    };

    const { BaseLayer } = LayersControl;

    return (
        <main>
            <MapTools setMarkers={setMarkers}/>
            <MapContainer
                center ={[48.8566, 2.3522]}
                zoom={3}
                worldCopyJump={true}
                attributionControl={false}
                doubleClickZoom={false}
                maxBounds={L.latLngBounds(new L.LatLng(200, -210), new L.LatLng(-200, 210))}
                maxBoundsViscosity={0.5}
                >
                <Legend/>
                <CountriesComp/>
                <LayersControl>
                    <BaseLayer checked name ="OSM">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                        />
                    </BaseLayer>
                    <BaseLayer name ="Dark">
                        <TileLayer
                            attribution='© OpenStreetMap contributors &copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a>'
                            url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=Iec7Dc3SZlSiI8kUpdY7m4ARDo4NQqGHpKr0upWdlHb3TY7638UgTm4K9v43kJ4c"
                        />
                    </BaseLayer>
                </LayersControl>
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                    animateAddingMarkers: true
                    maxClusterRadius={3}
                >
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker.geocode} icon={marker.icon}>
                            <Popup>{marker.popUp}</Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </main>
    )
};
