import {LocationXY} from "../assets/types.ts";

export const FetchLocation = async (): Promise<LocationXY> => {
    const res = await fetch("http://localhost:8080/location");
    if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
};
