
export async function GetCountryNum(country: string): Promise<number> {
    try {
        const response: Response = await fetch("http://localhost:8080/country?country=" + country);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        return 0;
    }
}