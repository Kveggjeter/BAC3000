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

    if (!data || data.length === 0) {
        return <div>Nothing to show as of now, please wait or reload...</div>;
    }

    return (
        <>
            {data.map((article) => {
                if (!article) return null;
                const {id, title, summary, sourceName, imgUrl} = article;
                return (
                    <div key={id} className="newsCard">
                        <p className="newsTitle">{title}</p>
                        <p className="article">{summary}</p>
                        <a className="link" href={id}>Source: {sourceName}</a>
                        <a href={id}>
                            <img className="placeholder" alt="Image" src={imgUrl}/>
                        </a>
                    </div>
                );
            })}
        </>
    );
}




