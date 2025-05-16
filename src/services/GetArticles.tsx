import {ArticleData} from "../assets/types/news/ArticleData.ts";

/**
 * Fetches articles for the API-endpoint.
 * This is used pretty much for all instances where we need to use the fetched articles.
 *
 * @returns {Promise<ArticleData[]>} a list of articles
 */
export async function GetArticles(): Promise<ArticleData[]> {
    try {
        const response = await fetch("https://api.simplytidings.com/news");
        if (!response.ok) {
            console.log("Network response was not ok.");
        }
        const data: ArticleData[] = await response.json();
        console.log("Number of articles from API:", data.length)
        return data;
    } catch (error) {
        console.error("Error with fetching location-data", error);
        return [];
    }
}

