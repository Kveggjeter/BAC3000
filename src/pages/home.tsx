import Navbar from "../components/sidebar/Navbar.tsx";
import MapComponent from "../components/mapUtilities/MapComponent.tsx";
import {FilterProvider} from "../hooks/FilterContext.tsx";

/**
 * Page representing Home. Currently, we only have one Page, but it will eventually
 * be more like Login.
 */
export function Home ()  {

    return (
        <>
                <FilterProvider>
                    <Navbar/>
                    <MapComponent/>
                </FilterProvider>
        </>
    )
}
