import {Dispatch, ReactNode, SetStateAction} from "react";
import {Icon} from "leaflet";

/**
 * interface for setMarkers
 */
export interface SetMarkerProps {
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: ReactNode; icon: Icon }[]>>;
}