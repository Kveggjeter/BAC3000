import {AddPoint} from "../../features/map/AddPoint.ts";
import {SetMarkerProps} from "../../assets/types/map/SetMarkerProps.ts";
import {useEffect, useRef} from "react";

/**
 * Temporarily function to fetch news.
 * @param setMarkers
 * @constructor
 */
export default function MapTools({ setMarkers }: SetMarkerProps) {
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        const fetchData = async () => {
            try {
                await AddPoint({ setMarkers });
            } catch (error) {
                console.error("Failed to fetch map data:", error);
            }
        };
        fetchData();
    }, []);
    return null;
}
