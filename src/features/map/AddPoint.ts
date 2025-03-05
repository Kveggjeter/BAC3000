import {GeneratePopup} from "../../components/mapUtilities/GeneratePopup.tsx";
import {HandleAddMarker} from "./HandleAddMarker.ts";
import {customIcon} from "../../components/mapUtilities/customIcon.tsx";
import {AddPointProps} from "../../assets/types/map/AddPointProps.ts";

/**
 * Adding points to the map using a button client-side. Will be changed to something auto-generated.
 * This function will however look mostly the same for either usecase
 * TODO: Find some other way to always display this, probably with a usestate or something.
 */
export function AddPoint({ setMarkers, articles }: AddPointProps) {

        for (const article of articles) {
            if (!article) continue;
            const { x, y, category, city } = article;

            if (!x || !y)  {
                console.warn(`Skipping article: No coordinates found for city "${city}" with x = ${x}, y = ${y}`);
                continue;
            }
            const icon = customIcon(category);
            const card = GeneratePopup(article);
            HandleAddMarker(x, y, card, setMarkers, icon);
        }
}

