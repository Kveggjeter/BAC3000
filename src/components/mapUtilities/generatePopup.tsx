import {ArticleData} from "../../assets/types/ArticleData.ts";
import {ReactNode} from "react";

export function GeneratePopup(article: ArticleData): ReactNode {

    const title = article.title;
    const summary = article.summary;
    const link = article.id;
    const sourceName = article.sourceName;
    const imgUrl = article.imgUrl;

    return (
        <div className="popup">
            <span className="title" id="title">{title}</span>
            <span className="article">{summary}</span>
            <a className="link" href={link}>{sourceName}</a>
            <a href={link}>
                <img className="articleImg" alt="Image" src={imgUrl} />
            </a>
        </div>
    );
}