import {ArticleData} from "../assets/types/news/ArticleData.ts";

/**
 * Fetches articles for the API-endpoint, throws an error if it fails.
 * This is used pretty much for all instances where we need to use the fetched articles.
 *
 * @returns {Promise<ArticleData[]>} a list of articles
 */
export async function GetArticles() {
    try {
        const response = await fetch("https://api.simplytidings.com/news");
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data: ArticleData[] = await response.json();
        console.log("Number of articles from API:", data.length)
        return data;
    } catch (error) {
        console.error("Error with fetching location-data", error);
        return [];
    }
}

