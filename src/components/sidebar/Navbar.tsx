import {RefObject, useEffect, useRef, useState} from 'react'
import newsIcon from '../../assets/images/news.png'
import aboutIcon from '../../assets/images/aboutUs.png'
import filterIcon from '../../assets/images/filter.png'
import st from '../../assets/images/st.png'
import {NewsCard} from "./NewsCard.tsx";
import {AboutUs} from "./AboutUs.tsx";
import "../../assets/styles/navigation.css"
import {FilterNav} from "./FilterNav.tsx";

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
            <div className={`sidenav 
            ${toggleNews ? 'active' : ''} :
            ${toggleAbout ? 'active' : ''} :
            ${showFilter ? 'active' : ''}`}
            >
                <div className="sidenavContent">
                <div className="logoContainer">
                    <img src={st} alt="st" className="logo" />
                    <span className="headerText">Simply Tidings</span>
                </div>
                <ul className="genList">
                    <div>
                        <li
                            className="listItem"
                            onClick={() => setToggleNews(!toggleNews)}
                        >
                            <img src={newsIcon} alt="newsIcon" className="listIcons" />
                            <a className="liText">News</a>
                        </li>
                        <div ref={newsRef} className={toggleNews ? 'newsPage active' : 'newsPage'}>
                            <NewsCard toggleNews={toggleNews}/>
                        </div>
                    </div>
                    <div>
                        <li
                            className="listItem"
                            onClick={() => setToggleAbout(!toggleAbout)}
                        >
                            <img src={aboutIcon} alt="aboutIcon" className="listIcons" />
                            <a className="liText">About us</a>
                        </li>
                        <div ref={aboutRef} className={toggleAbout ? 'aboutPage active' : 'aboutPage'}>
                            <AboutUs/>
                        </div>
                    </div>
                    <div>
                        <li className="listItem"
                        onClick={() => setShowFilter(!showFilter)}
                        >
                            <img src={filterIcon} alt="filterIcon" className="listIcons" />
                            <a className="liText">Filter</a>
                        </li>
                        <div className={showFilter ? 'filter active' : 'filter'}>
                            <FilterNav/>
                        </div>
                    </div>
                </ul>
                </div>
            </div>
        </>
    )
}

