import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GetAPI} from "../../services/getAPI.tsx";
import {useEffect, useState} from "react";

/**
 * Generates the articles shown in the navbar.
 * TODO: Do something about the css, this should absolutely be modular. Global problems currently
 * TODO: Find another way to fetch data, this is really wierd.
 */
export function NewsCard() {
    const [data, setData] = useState<ArticleData[]>([]);

    useEffect(() => {
        GetAPI()
            .then((result) => setData(result))
            .catch((error) => console.error("Error fetching articles:", error));
    }, []);

    return (
        <>
            {data.map((article) => (
                <div key={article.id} className="newsCard">
                    <p className="newsTitle">{article.title}</p>
                    <p className="article">{article.summary}</p>
                    <a className="link" href={article.id}>Source: {article.sourceName}</a>
                    <a href={article.id}>
                        <img className="placeholder" alt="Image" src={article.imgUrl} />
                    </a>
                </div>
            ))}
        </>
    );
}




