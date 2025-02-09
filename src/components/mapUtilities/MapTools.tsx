import { useState, Dispatch, SetStateAction, ReactNode } from "react";
import styles from '../../assets/styles/mapTools.module.css';
import { GetAPI } from "../../services/getAPI.tsx";
import {ArticleData} from "../../assets/types/ArticleData.ts";
import {handleAddMarker} from "./HandleAddMarker.ts";
import {geoRef} from "./GeoRef.ts";
import {GeneratePopup} from "./generatePopup.tsx";


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

    const addPoint = async () => {
        try {
            const data = await GetAPI() as ArticleData[];

            for (const article of data) {
                const card = GeneratePopup(article);
                const city: string = article.city;

                const coordinates = await geoRef(city);

                if (!coordinates) {
                    console.warn(`Skipping article: No coordinates found for city "${city}"`);
                    continue;
                }

                handleAddMarker(
                    coordinates.lat.toString(),
                    coordinates.lon.toString(),
                    card,
                    setMarkers,
                    () => {}
                );
            }

        } catch (error) {
            console.error("Error in addPoint:", error);
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
            <button id="fetch-button" className={styles.btn} onClick={addPoint}>
                Fetch
            </button>
        </div>
    );
}

