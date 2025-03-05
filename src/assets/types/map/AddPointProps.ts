import {SetMarkerProps} from "./SetMarkerProps.ts";
import {ArticleData} from "../news/ArticleData.ts";

export interface AddPointProps {
    setMarkers: SetMarkerProps;
    articles: ArticleData[];
}