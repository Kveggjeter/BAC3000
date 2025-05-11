import {ArticleFacts} from "../assets/types/news/ArticleFacts.ts";

/**
 * Fetches a list/data object from the API-endpoint with all relevant statistics for the
 * parameterized country, throws an Error if this fails.
 * This is used with CountriesCompo to give more context to each of the country-polygons.
 *
 * @param country The country we want to get statistics from
 */
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