import {Dispatch, ReactNode, SetStateAction} from "react";
import {Icon} from "leaflet";


export type MarkerData = {
    geocode: [number, number];
    popUp: ReactNode;
    icon: Icon;
};


export type SetMarkerProps = Dispatch<SetStateAction<MarkerData[]>>;