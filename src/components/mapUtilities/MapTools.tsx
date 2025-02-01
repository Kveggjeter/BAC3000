import { useState, Dispatch, SetStateAction, ReactNode } from "react";
import styles from '../../assets/styles/mapTools.module.css';
import { FetchLocation } from "../../services/FetchLocation.tsx";

interface MapToolsProps {
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: ReactNode }[]>>;
}

/**
 * Search-box
 * @param setMarkers
 * @constructor
 */
export default function MapTools({ setMarkers }: MapToolsProps) {
    const [inputX, setInputX] = useState<string>("");
    const [inputY, setInputY] = useState<string>("");

    const resetInputs = () => {
        setInputX("");
        setInputY("");
    };

    const fetchAndAddMarkers = async () => {
        try {
            const data = await FetchLocation();

            if (!Array.isArray(data)) {
                throw new Error("Invalid data format received from backend");
            }

            data.forEach((marker: { x: number; y: number; html: string }) => {
                handleAddMarker(
                    marker.x.toString(),
                    marker.y.toString(),
                    marker.html,
                    setMarkers,
                    () => {}
                );
            });

        } catch (error) {
            console.error("Error fetching location from backend:", error);
            alert("Could not fetch location from the server.");
        }
    };

    return (
        <div id="interaction-box" className={styles.interactionBox}>
            <input type="text" id="locationX" value={inputX} onChange={(e) => setInputX(e.target.value)} />
            <label>Location X</label>
            <input type="text" id="locationY" value={inputY} onChange={(e) => setInputY(e.target.value)} />
            <label>Location Y</label>
            <button id="search-button" className={styles.btn} onClick={() => handleAddMarker(inputX, inputY, "", setMarkers, resetInputs)}>
                Search
            </button>
            <button id="fetch-button" className={styles.btn} onClick={fetchAndAddMarkers}>
                Fetch
            </button>
        </div>
    );
}

/**
 * Handler and validator
 * @param inputX
 * @param inputY
 * @param html
 * @param setMarkers
 * @param resetInputs
 */
export function handleAddMarker(
    inputX: string,
    inputY: string,
    html: string,
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
                popUp: <div dangerouslySetInnerHTML={{ __html: html }} />,
            },
        ]);
        resetInputs();
    } else {
        alert("These gotta be real coordinates, bucko");
    }
}
