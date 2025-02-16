import {GetAPI} from "../../services/getAPI.tsx";
import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GeneratePopup} from "../../components/mapUtilities/GeneratePopup.tsx";
import {HandleAddMarker} from "./HandleAddMarker.ts";
import {SetMarkerProps} from "../../assets/types/map/SetMarkerProps.ts";

/**
 * Adding points to the map using a button client-side. Will be changed to something auto-generated.
 * This function will however look mostly the same for either usecase
 * TODO: Find some other way to always display this, probably with a usestate or something.
 */
export async function AddPoint({ setMarkers }: SetMarkerProps): Promise<void> {
    try {
        const data = await GetAPI() as ArticleData[];

        for (const article of data) {
            if(!article) continue;
            const card = GeneratePopup(article);
            const city: string = article.city;
            const x: number = article.x;
            const y: number = article.y;

            if (!x || !y)  {
                console.warn(`Skipping article: No coordinates found for city "${city}"`);
                continue;
            }

            HandleAddMarker(
                x,
                y,
                card,
                { setMarkers }
            );
        }
    } catch (error) {
        console.error("Error in addPoint:", error);
    }
}