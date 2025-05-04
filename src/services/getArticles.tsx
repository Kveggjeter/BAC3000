import {ArticleData} from "../assets/types/news/ArticleData.ts";

export async function GetArticles() {
    try {
        const response = await fetch("http://ec2-16-16-216-11.eu-north-1.compute.amazonaws.com:8080/news");
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

