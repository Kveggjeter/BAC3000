import crime from "../../assets/images/custom/crime.png";
import culture from "../../assets/images/custom/culture.png";
import business from "../../assets/images/custom/business.png";
import science from "../../assets/images/custom/science.png";
import politics from "../../assets/images/custom/politics.png";
import sport from "../../assets/images/custom/sports.png";
import unknown from "../../assets/images/custom/mixed.png";
import {Icon} from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/**
 * Returns a customized icon based on the news-category.
 * Used to represent the different categories on the map visually.
 *
 * @param cyName name of the new category
 * @returns {Icon} A customized icon
 */
export function customIcon(cyName: string): Icon {
    const iconUrl = getIcon(cyName);

    return new Icon({
        iconUrl,
        iconSize: [115, 57],
        popupAnchor: [0, -30],
        shadowUrl: markerShadow,
        shadowAnchor: [13, 28]
    });
}

/**
 * Helper-function for choosing the correct icon based on category
 *
 * @param category category for the news article
 * @returns {string} return the correct icon to use
 */
function getIcon (category: string) {
    switch (category) {
        case "Business":
            return business;
        case "Crime":
            return crime;
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
