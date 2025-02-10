/**
 * Uses the nominatim geo-reference the location. However, it's still an API-call not mainly
 * meant for larger traffic. It will probably be necessary to either replace the technology or
 * local-install the API with docker. Link here for later use:
 * https://github.com/mediagis/nominatim-docker
 * or esri: https://egghead.io/lessons/react-add-placename-location-search-to-react-leaflet-with-esri-leaflet-geocoder
 * SOURCE: https://www.youtube.com/watch?v=vOPr5k_SGVA&ab_channel=DevModeVM
 * @param city
 */
export async function GeoRef(city: string): Promise<{ lat: number; lon: number } | null> {

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

