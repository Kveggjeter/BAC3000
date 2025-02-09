import { Dispatch, ReactNode, SetStateAction } from "react";

export function handleAddMarker(
    inputX: string,
    inputY: string,
    html: ReactNode,
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: ReactNode }[]>>,
    resetInputs: () => void
) {
    const parsedX = parseFloat(inputX);
    const parsedY = parseFloat(inputY);

    if (!isNaN(parsedX) && !isNaN(parsedY)) {
        setMarkers((prevMarkers) => [
            ...prevMarkers,
            {
                geocode: [parsedX, parsedY],
                popUp: html,
            },
        ]);
        resetInputs();
    } else {
        alert("These gotta be real coordinates, bucko");
    }
}