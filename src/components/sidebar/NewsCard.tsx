import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GetArticles} from "../../services/getArticles.tsx";
import {useEffect, useState} from "react";
import * as React from "react";

/**
 * Generates the articles shown in the navbar.
 * TODO: Do something about the css, this should absolutely be modular. Global problems currently
 * TODO: Find another way to fetch data, this is really wierd.
 */
export function NewsCard() {
    const [data, setData] = useState<ArticleData[]>([]);
    const [value, setValue] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setValue(e.target.value);
    }

    useEffect(() => {
        GetArticles()
            .then((result) => setData(result))
            .catch((error) => console.error("Error fetching articles:", error));
    }, []);

    if (!data || data.length === 0) {
        return <div>Nothing to show as of now, please wait or reload...</div>;
    }

    const filterArticle = value.trim().toLowerCase()
    ? data.filter((article) => {
            if (!article || !article.title || !article.summary) return null;
        return (
            article.title.toLowerCase().includes(value.toLowerCase()) || article.summary.toLowerCase().includes(value.toLowerCase())
            );
        })
        : data;


    return (
        <>
            <div className="nwp">
                <label className="searchLabel">Type a word of interest! {'\u{1F50E}'}</label>
                <input type="text" className="search" placeholder="Search.." value={value} onChange={handleChange} autoFocus></input>
            </div>
            {filterArticle.map((article) => {
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




