import {Dispatch, ReactNode, SetStateAction} from "react";
import {Icon} from "leaflet";

/**
 * Type casting for the popups, so it does not need to be declared each time.
 */
export type MarkerData = {
    geocode: [number, number];
    popUp: ReactNode;
    icon: Icon;
};

/**
 * Defining SetMarkerProps as a ReactDispatch with MarkerData as given types
 */
export type SetMarkerProps = Dispatch<SetStateAction<MarkerData[]>>;