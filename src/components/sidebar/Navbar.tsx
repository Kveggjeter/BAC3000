import {RefObject, useEffect, useRef, useState} from 'react'
import newsIcon from '../../assets/images/news.png'
import aboutIcon from '../../assets/images/aboutUs.png'
import filterIcon from '../../assets/images/filter.png'
import st from '../../assets/images/st.png'
import {NewsCard} from "./NewsCard.tsx";
import {AboutUs} from "./AboutUs.tsx";
import "../../assets/styles/navigation.css"
import {FilterNav} from "./FilterNav.tsx";

/**
 * This is the component for the navigation bar of the application and gives access to mainly news, about us and
 * the filter-menu. The components state determines which section is open and its all decided with each of the
 * respective toggle-states.
 *
 * The navigation bars also listens to clicks outside an active section and closes that section
 * when it registers a click.
 */
export default function Navbar() {
    const [ showFilter, setShowFilter ] = useState(false);
    const [ toggleAbout, setToggleAbout ] = useState(false);
    const [ toggleNews, setToggleNews ] = useState(false);

    const newsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
        useEffect(() => {
            const handler = (e: MouseEvent) => {
                if (ref.current && e.target instanceof Node)
                    if (!ref.current.contains(e.target)) callback();
            }
            document.addEventListener("mousedown", handler);
        });
    }

    useClickOutside(newsRef, () => setToggleNews(false));
    useClickOutside(aboutRef, () => setToggleAbout(false));


    return (
        <>
            <nav className={`sidenav 
            ${toggleNews ? 'active' : ''} :
            ${toggleAbout ? 'active' : ''} :
            ${showFilter ? 'active' : ''}`}
            >
                <div className="sidenavContent">
                <div className="logoContainer">
                    <img src={st} alt="" className="logo" />
                    <h1 className="headerText">Simply Tidings</h1>
                </div>
                <ul className="genList">
                    <div>
                        <li tabIndex={0}
                            className="listItem"
                            onClick={() => setToggleNews(!toggleNews)}
                        >
                            <img src={newsIcon} alt="" className="listIcons" />
                            <a className="liText">News</a>
                        </li>
                        <div ref={newsRef} className={toggleNews ? 'newsPage active' : 'newsPage'}>
                            <NewsCard toggleNews={toggleNews}/>
                        </div>
                    </div>
                    <div>
                        <li tabIndex={0}
                            className="listItem"
                            onClick={() => setToggleAbout(!toggleAbout)}
                        >
                            <img src={aboutIcon} alt="" className="listIcons" />
                            <a className="liText">About</a>
                        </li>
                        <div ref={aboutRef} className={toggleAbout ? 'aboutPage active' : 'aboutPage'}>
                            <AboutUs/>
                        </div>
                    </div>
                    <div>
                        <li tabIndex={0} className="listItem"
                        onClick={() => setShowFilter(!showFilter)}
                        >
                            <img src={filterIcon} alt="" className="listIcons" />
                            <a className="liText">Filter</a>
                        </li>
                        <div className={showFilter ? 'filter active' : 'filter'}>
                            <FilterNav/>
                        </div>
                    </div>
                </ul>
                </div>
            </nav>
        </>
    )
}

