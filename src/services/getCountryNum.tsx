import {ArticleFacts} from "../assets/types/news/ArticleFacts.ts";

export async function GetCountryNum(country: string) {
    try {
        const response: Response = await fetch("http://ec2-16-16-216-11.eu-north-1.compute.amazonaws.com:8080/country?country=" + country);
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