import { useState, Dispatch, SetStateAction } from "react";
import styles from '../../assets/styles/mapTools.module.css';
import {FetchLocation} from "../../services/FetchLocation.tsx";

interface MapToolsProps {
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: string }[]>>;
}

/**
 * Search-box
 * @param addMarker
 * @constructor
 */
export default function MapTools({ setMarkers }: MapToolsProps) {

    const [inputX, setInputX] = useState<string>("");
    const [inputY, setInputY] = useState<string>("");

    const resetInputs = () => {
        setInputX("");
        setInputY("");
    };

    const fetchAndAddMarker = async () => {
        try {
            const data = await FetchLocation();
            const { locationX, locationY } = data;

            handleAddMarker(
                locationX.toString(),
                locationY.toString(),
                setMarkers,
                () => {}
            );
        } catch (error) {
            console.error("Error fetching location from backend:", error);
            alert("Could not fetch location from the server.");
        }
    };



    return (
      <div id="interaction-box" className={styles.interactionBox}>
          <input type="text" id="locationX" value={inputX} onChange={
              (e) => setInputX(e.target.value)}/>
          <label>Location X</label>
          <input type="text" id="locationY" value={inputY} onChange={
              (e) => setInputY(e.target.value)}/>
          <label>Location Y</label>
          <button id="search-button" className={styles.btn} onClick={
              () => handleAddMarker(inputX, inputY, setMarkers, resetInputs)}>Search</button>
          <button id="fetch-button" className={styles.btn} onClick={fetchAndAddMarker}>Fetch</button>
      </div>
    );
}


/**
 * Handler and validator
 * @param inputX
 * @param inputY
 * @param setMarkers
 * @param resetInputs
 */
export function handleAddMarker(
    inputX: string,
    inputY: string,
    setMarkers: Dispatch<SetStateAction<{ geocode: [number, number]; popUp: string }[]>>,
    resetInputs: () => void
) {
    const parsedX = parseFloat(inputX);
    const parsedY = parseFloat(inputY);

    if (!isNaN(parsedX) && !isNaN(parsedY)) {
        setMarkers((prevMarkers) => [
            ...prevMarkers,
            { geocode: [parsedX, parsedY], popUp: "Her er det noe" }
        ]);
        resetInputs();
    } else {
        alert("These gotta be real coordinates, bucko");
    }
}

