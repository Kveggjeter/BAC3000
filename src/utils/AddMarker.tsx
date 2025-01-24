import { Dispatch, SetStateAction } from "react";

/**
 * for adding and setting markers. Its redundant, does pretty much the same
 * as handleAddMarker in [MapTools.tsx].
 * TODO: Combine MapTools.handleAddMarker with addMarker.
 * @param locationX
 * @param locationY
 * @param setMarkers
 */
export function addMarker(
    locationX: number,
    locationY: number,
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: string }[]>>
) {
    setMarkers((prevMarkers) => [
        ...prevMarkers,
        { geocode: [locationX, locationY], popUp: "Her er det noe" }
    ]);
}
