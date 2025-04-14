import Navbar from "../components/sidebar/Navbar.tsx";
import MapComponent from "../components/mapUtilities/MapComponent.tsx";
import {FilterProvider} from "../hooks/FilterContext.tsx";


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

export default Home;