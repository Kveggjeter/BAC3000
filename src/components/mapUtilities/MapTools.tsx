import styles from '../../assets/styles/mapTools.module.css';
import {AddPoint} from "../../features/map/AddPoint.ts";
import {SetMarkerProps} from "../../assets/types/map/SetMarkerProps.ts";


/**
 * Temporarily function to fetch news.
 * @param setMarkers
 * @constructor
 */
export default function MapTools({ setMarkers }: SetMarkerProps) {

    const handleClick = async () => {
        await AddPoint({ setMarkers });
    };

    return (
        <div id="interaction-box" className={styles.interactionBox}>
            <button id="fetch-button" className={styles.btn} onClick={handleClick}>
                Fetch
            </button>
        </div>
    );
}

