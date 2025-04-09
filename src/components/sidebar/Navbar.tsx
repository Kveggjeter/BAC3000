import { useState } from 'react'
import region from '../../assets/images/region.png'
import categories from '../../assets/images/categories.png'
import signin from '../../assets/images/signin.png'
import newsIcon from '../../assets/images/news.png'
import aboutIcon from '../../assets/images/aboutUs.png'
import filterIcon from '../../assets/images/filter.png'
import { Link } from 'react-router-dom'
import {NewsCard} from "./NewsCard.tsx";
import {AboutUs} from "./AboutUs.tsx";
import {UseFilter} from "../../hooks/FilterContext.tsx";
import "../../assets/styles/navigation.css"

export default function Navbar() {
    const [showFilter, setShowFilter] = useState(false);
    const [showRegion, setShowRegion] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [toggleNews, setToggleNews] = useState(false);
    const { filters, toggleFilter } = UseFilter();

    return (
        <>
            <div className="sidenav">
                <div className="logoContainer">
                    <span className="headerText">Simply Tidings</span>
                </div>
                <ul className={`genList ${toggleNews ? 'active' : ''}`}>
                    <li className="listItem">
                                <img src={signin} alt="signin" className="listIcons" />
                                <a className="liText">Sign in</a>
                    </li>
                    <li
                        className="listItem"
                        onClick={() => setToggleNews(!toggleNews)}
                    >
                        <img src={newsIcon} alt="newsIcon" className="listIcons" />
                            <a className="liText">News</a>
                    </li>
                    <div className={toggleNews ? 'newsPage active' : 'newsPage'}>
                        <NewsCard toggleNews={toggleNews}/>
                    </div>
                    <li className="listItem">
                        <img src={aboutIcon} alt="aboutIcon" className="listIcons" />
                            <a className="liText">About us</a>
                    </li>
                    <div className={showAbout ? 'aboutPage active' : 'aboutPage'}>
                        <AboutUs/>
                    </div>
                    <li className="listItem">
                            <img src={filterIcon} alt="filterIcon" className="listIcons" />
                            <a className="liText">Filter</a>
                    </li>
                </ul>
                    <div className={showFilter ? 'filter active' : 'filter'}>
                        <ul className="filterList">
                        <li className="filterHeader">
                            <div className="filterBox" id="regionBox"></div>
                            <img src={region} alt="Region" className="filterIcon"/>
                            <a className='active' onClick={() => setShowRegion(!showRegion)}>Region</a>
                        </li>
                        <ul className={showRegion ? 'filterOptions active' : 'filterOptions'}>
                            {["Africa", "Asia", "Europe", "Oceania", "North-America", "South-America"].map((reg) => (
                                <li key={reg}>
                                    <input type="checkbox" id={reg.toLowerCase()}
                                           value={reg} checked={filters.regions.includes(reg)}
                                           onChange={() => toggleFilter("regions", reg)} />
                                    <label htmlFor={reg.toLowerCase()}>{reg}</label>
                                </li>
                            ))}
                        </ul>
                        <li className="filterHeader">
                            <div className="filterBox" id="categoryBox"></div>
                            <img src={categories} alt="Category" className="filterIcon"/>
                            <a className='active' onClick={() => setShowCategory(!showCategory)}>Category</a>
                        </li>
                        <ul className={showCategory ? 'filterOptions active' : 'filterOptions'}>
                            {["Business", "Crime", "Culture", "Politics", "Science", "Sports"].map((cat) => (
                                <li key={cat}>
                                    <input type="checkbox" id={cat.toLowerCase()} value={cat}
                                    checked={filters.category.includes(cat)} onChange={() => toggleFilter("category", cat)} />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </li>
                            ))}
                        </ul>
                        </ul>
                    </div>
            </div>
        </>
    )
}

