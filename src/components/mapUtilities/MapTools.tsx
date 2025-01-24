import { useState, Dispatch, SetStateAction } from "react";
import styles from '../../assets/styles/mapTools.module.css';

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

