/**
 * SOURCE: https://www.youtube.com/watch?v=vOPr5k_SGVA&ab_channel=DevModeVM
 * @param city
 */
export async function geoRef(city: string): Promise<{ lat: number; lon: number } | null> {

    try {
        const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&adressdetails=1&q=' + city)
        const results = await res.json();

        if (results.length === 0) {
            console.warn(`No coordinates found for city: ${city}`);
            return null;
        }

        return {
            lat: parseFloat(results[0].lat),
            lon: parseFloat(results[0].lon)
        };

    } catch (error) {
        console.log(error);
        return null;
    }

}

