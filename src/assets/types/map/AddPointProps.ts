import {SetMarkerProps} from "./SetMarkerProps.ts";
import {ArticleData} from "../news/ArticleData.ts";

/**
 * Type casting for AddPoint.ts
 * Gives setMarkers and articles types. SetMarkers is from another typing, @see SetMarkerProps
 */
export interface AddPointProps {
    setMarkers: SetMarkerProps;
    articles: ArticleData[];
}