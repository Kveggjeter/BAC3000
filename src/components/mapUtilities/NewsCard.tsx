import {ArticleData} from "../../assets/types/ArticleData.ts";
import {GetAPI} from "../../services/getAPI.tsx";
import {useEffect, useState} from "react";


export function NewsCard() {
    const [data, setData] = useState<ArticleData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await GetAPI();
            setData(result);
        }
        fetchData();
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




