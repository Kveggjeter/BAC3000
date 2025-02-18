import {ReactNode} from "react";
import {SetMarkerProps} from "../../assets/types/map/SetMarkerProps.ts";
import {Icon} from "leaflet";

/**
 * Adds a point to the map using the given coordinates and sends the relevant
 * html to the popup. setMarkers are defined with an interface [MapToolsProps]
 */
export function HandleAddMarker(
    lat: number,
    lon: number,
    html: ReactNode,
    { setMarkers }: SetMarkerProps,
    icon: Icon
) {
    setMarkers((prevMarkers) => [
        ...prevMarkers,
        {
            geocode: [lat, lon],
            popUp: html, icon
        },
        ]);
    }

