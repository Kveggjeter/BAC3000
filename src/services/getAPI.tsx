export async function GetAPI() {
    try {
        const response = await fetch("http://localhost:8080/news");
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return await response.json();
    } catch (error) {
        console.error("Error with fetching location-data", error);
        return [];
    }
}

