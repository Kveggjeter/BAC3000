import {Dispatch, ReactNode, SetStateAction} from "react";

/**
 * interface for setMarkers
 */
export interface SetMarkerProps {
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: ReactNode }[]>>;
}