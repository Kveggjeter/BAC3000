import {ArticleFacts} from "../assets/types/news/ArticleFacts.ts";

export async function GetCountryNum(country: string) {
    try {
        const response: Response = await fetch("https://api.simplytidings.com/country?country=" + country);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data: ArticleFacts = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}