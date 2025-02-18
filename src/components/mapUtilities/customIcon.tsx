import crime_2 from "../../assets/images/Crime2.png";
import culture from "../../assets/images/Art.png";
import business from "../../assets/images/business.png";
import science from "../../assets/images/Science.png";
import politics from "../../assets/images/Politics.png";
import sport from "../../assets/images/Sport.png";
import unknown from "../../assets/images/unknown.png";
import {Icon} from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


export function customIcon(cyName: string) {
    const iconUrl = getIcon(cyName);

    return new Icon({
        iconUrl,
        iconSize: [128, 78],
        iconAnchor: [60, 55],
        popupAnchor: [0, -30],
        shadowUrl: markerShadow,
        shadowAnchor: [13, 28]
    });
}

function getIcon (category: string) {
    switch (category) {
        case "Business":
            return business;
        case "Crime":
            return crime_2;
        case "Culture":
            return culture;
        case "Politics":
            return politics;
        case "Science":
            return science;
        case "Sport":
            return sport;
        default:
            return unknown;
    }
}
