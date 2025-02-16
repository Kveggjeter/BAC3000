import {ArticleData} from "../assets/types/news/ArticleData.ts";

export async function GetAPI() {
    try {
        const response = await fetch("http://localhost:8080/news");
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

