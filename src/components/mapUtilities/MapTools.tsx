import { useState } from "react";
import styles from '../../assets/styles/mapTools.module.css';

interface MapToolsProps {
    addMarker(locationX: number, locationY: number): void;
}

/**
 * Search-box
 * @param addMarker
 * @constructor
 */
export default function MapTools({ addMarker }: MapToolsProps){

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
              () => handleAddMarker(inputX, inputY, addMarker, resetInputs)}>Search</button>
      </div>
    );
}

/**
 *Validator, temporally
 * @param inputX
 * @param inputY
 * @param addMarker
 * @param resetInputs
 */
export function handleAddMarker(
    inputX: string,
    inputY: string,
    addMarker: (locationX: number, locationY: number) => void,
    resetInputs: () => void
) {
    const parsedX = parseFloat(inputX);
    const parsedY = parseFloat(inputY);

    if (!isNaN(parsedX) && !isNaN(parsedY)) {
        addMarker(parsedX, parsedY);
        resetInputs();
    } else {
        alert("These gotta be real coordinates, bucko");
    }
}
