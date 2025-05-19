import {RefObject, useEffect, useRef, useState} from 'react'
import newsIcon from '../../assets/images/news.png'
import aboutIcon from '../../assets/images/aboutUs.png'
import filterIcon from '../../assets/images/filter.png'
import st from '../../assets/images/st.png'
import arrows from '../../assets/images/arrows.png'
import {NewsCard} from "./NewsCard.tsx";
import {AboutUs} from "./AboutUs.tsx";
import "../../assets/styles/navigation.css"
import {FilterNav} from "./FilterNav.tsx";

/**
 * This is the component for the navigation bar of the application and gives access to mainly news, about us and
 * the filter-menu. The components state determines which section is open and it's all decided with each of the
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

    function useClickOutside(refs: RefObject<HTMLElement>[], callback: () => void ) {
        useEffect(() => {
            const handler = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (target.closest('.listItem')) return;
                const clickedOutsideAll = refs.every(
                    (ref) => ref.current && !ref.current.contains(target)
                );
                if (clickedOutsideAll) callback();
            };

            document.addEventListener('mousedown', handler);
            return () => document.removeEventListener('mousedown', handler);
        }, [refs, callback]);
    }

    useClickOutside([newsRef, aboutRef], () => {
        setToggleNews(false);
        setToggleAbout(false);
    });

    function toggleAll () {
        setToggleNews(false);
        setToggleAbout(false);
        setShowFilter(false);
    }


    return (
        <>
            <nav className={`sidenav 
            ${toggleNews ? 'active' : ''} :
            ${toggleAbout ? 'active' : ''} :
            ${showFilter ? 'active' : ''}`}
            >
                <div className="sidenavContent">
                <div className="logoContainer">
                    <div className="escapeBtn">
                        <img src={arrows}
                             alt=""
                             onClick={() => toggleAll()}
                        />
                        <p>Back</p>
                    </div>
                    <img src={st} alt="" className="logo" />
                    <h1 className="headerText">Simply Tidings</h1>
                </div>
                <ul className="genList">
                    <div ref={newsRef} className="listCollection">
                        <li tabIndex={0}
                            className="listItem"
                            onClick={() => setToggleNews(!toggleNews)}
                        >
                            <img src={newsIcon} alt="" className="listIcons" />
                            <a className="liText">News</a>
                        </li>
                        {toggleNews && (
                            <div className="newsPage active">
                                <NewsCard toggleNews={toggleNews}/>
                            </div>
                        )}
                    </div>
                    <div ref={aboutRef}>
                        <li tabIndex={0}
                            className="listItem"
                            onClick={() => setToggleAbout(!toggleAbout)}
                        >
                            <img src={aboutIcon} alt="" className="listIcons" />
                            <a className="liText">About</a>
                        </li>
                        {toggleAbout && (
                            <div className="aboutPage active">
                                <AboutUs/>
                            </div>
                        )}
                    </div>
                    <div>
                        <li tabIndex={0} className="listItem"
                        onClick={() => setShowFilter(!showFilter)}
                        >
                            <img src={filterIcon} alt="" className="listIcons" />
                            <a className="liText">Filter</a>
                        </li>
                        {showFilter && (
                            <div className="filter active">
                                <FilterNav/>
                            </div>
                        )}
                    </div>
                </ul>
                </div>
            </nav>
        </>
    )
}

