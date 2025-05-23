import {ArticleData} from "../../assets/types/news/ArticleData.ts";
import {GetArticles} from "../../services/GetArticles.tsx";
import {useEffect, useState} from "react";
import * as React from "react";
import {NewsProp} from "../../assets/types/nav/NewsProp.ts";

/**
 * This is the component for the news-section, showing all the news in a column-like section.
 * When the component is activated by "toggleNews", it fetches all the articles.
 *
 * There is also a search bar that can be used to show only the articles with the qualified
 * searched text in them. The search is quite simple, it shows (although disregarding upper/lowercase) just the thing
 * entered the search-box.
 *
 * If there are no news to be fetched or if it fails, a fallback messages returns
 */
export function NewsCard({toggleNews}: NewsProp) {
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

    if (!toggleNews) return null;

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
        <> <div id="nwp">
            <div className="nwp">
                <label className="searchLabel">Type a word of interest! {'\u{1F50E}'}</label>
                <input type="text" className="search" placeholder="Search.." value={value} onChange={handleChange} autoFocus></input>
            </div>
            {filterArticle.map((article) => {
                if (!article) return null;
                const {id, title, summary, sourceName, imgUrl} = article;
                return (
                    <div key={id} className="newsCard">
                        <h3 className="newsTitle">{title}</h3>
                        <p className="article">{summary}</p>
                        <a className="link" href={id}>Source: {sourceName}</a>
                        <a href={id}>
                            <img className="placeholder" alt="Image" src={imgUrl}/>
                        </a>
                    </div>
                );
            })}
        </div>
        </>
    );
}




