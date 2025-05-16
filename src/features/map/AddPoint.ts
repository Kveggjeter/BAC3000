import {GeneratePopup} from "../../components/mapUtilities/GeneratePopup.tsx";
import {HandleAddMarker} from "./HandleAddMarker.ts";
import {customIcon} from "../../components/mapUtilities/CustomIcon.tsx";
import {AddPointProps} from "../../assets/types/map/AddPointProps.ts";

/**
 * This is a helper function that converts a list with articles to map-pointers.
 *
 * We iterate trough each article and get each of their respective coordinates, category
 * and content. Each marker is given a customized icon based on the category, via customIcon.
 * The popup-content are made with "GeneratePopup".
 *
 * HandleAddMarker handles the data and adds a marked via setMarkers.
 */
export function AddPoint({ setMarkers, articles }: AddPointProps) {

        for (const article of articles) {
            if (!article) continue;
            const { x, y, category, title} = article;

            if (!x || !y)  {
                console.warn(`Skipping article: No coordinates found for article: ${title}" with x = ${x}, y = ${y}`);
                continue;
            }
            const icon = customIcon(category);
            const card = GeneratePopup(article);
            HandleAddMarker(x, y, card, setMarkers, icon);
        }
}

