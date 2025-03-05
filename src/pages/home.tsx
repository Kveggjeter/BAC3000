import {useState} from "react";
import Navbar from "../components/sidebar/Navbar.tsx";
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import MapComponent from "../components/mapUtilities/MapComponent.tsx";
import {FilterProvider} from "../hooks/FilterContext.tsx";

export function Home ()  {
    const [ showNav, setShowNav ] = useState(true);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleClick = () => {
        setIsVisible(false);
        setShowNav(!showNav);

        setTimeout(() => setIsVisible(true), 1000);
    }

    return (
        <>
            <FilterProvider>
                <Navbar show={showNav}/>
                    {isVisible && (
                        <div className={showNav ? 'toggle active' : 'toggle'} onClick={toggleClick}>
                        {showNav ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
                        </div> )}
                <MapComponent/>
            </FilterProvider>
        </>
    )
}

export default Home;