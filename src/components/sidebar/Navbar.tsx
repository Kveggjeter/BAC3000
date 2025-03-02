import { useState } from 'react'
import logo from '../../assets/images/logoD.png'
import region from '../../assets/images/region.png'
import categories from '../../assets/images/categories.png'
import { Link } from 'react-router-dom'
import {NewsCard} from "./NewsCard.tsx";
import {ShowType} from "../../assets/types/nav/ShowType.ts";
import {AboutUs} from "./AboutUs.tsx";

export default function Navbar({show}: ShowType) {
    const [showFilter, setShowFilter] = useState(false);
    const [showRegion, setShowRegion] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <div className={`${show ? 'sidenav active' : 'sidenav'} ${showNews ? 'expanded' : ''} ${showAbout ? 'expanded' : ''} `}>
                <div className="logoContainer">
                    <img src={logo} alt="logo" className="logos" />
                </div>
                <ul className="genList">
                    <li>
                        <Link to='/login' className='active'>
                            <span className="liText">Sign in</span>
                        </Link>
                    </li>
                    <li className="newsDiv">
                        <a className='active' onClick={() => {setShowNews(!showNews)}}>
                            <span className="liText">News</span>
                        </a>
                    </li>
                    <div className={showNews ? 'newsPage active' : 'newsPage'}>
                        <NewsCard/>
                    </div>
                    <li className="aboutDiv">
                        <a className='active' onClick={() => {setShowAbout(!showAbout)}}>
                            <span className="liText">About us</span>
                        </a>
                    </li>
                    <div className={showAbout ? 'aboutPage active' : 'aboutPage'}>
                        <AboutUs/>
                    </div>
                    <li>
                        <a className='active' onClick={() => setShowFilter(!showFilter)}>
                            <span className="liText">Filter</span>
                        </a>
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
                            {["Africa", "Asia", "Europe", "Oceania", "North-America", "South-America"].map((region) => (
                                <li key={region}>
                                    <input type="checkbox" id={region.toLowerCase()} value={region} />
                                    <label htmlFor={region.toLowerCase()}>{region}</label>
                                </li>
                            ))}
                        </ul>
                        <li className="filterHeader">
                            <div className="filterBox" id="categoryBox"></div>
                            <img src={categories} alt="Category" className="filterIcon"/>
                            <a className='active' onClick={() => setShowCategory(!showCategory)}>Category</a>
                        </li>
                        <ul className={showCategory ? 'filterOptions active' : 'filterOptions'}>
                            {["Business", "Crime", "Culture", "Politics", "Science", "Sports"].map((category) => (
                                <li key={category}>
                                    <input type="checkbox" id={category.toLowerCase()} value={category} />
                                    <label htmlFor={category.toLowerCase()}>{category}</label>
                                </li>
                            ))}
                        </ul>
                        </ul>
                    </div>
            </div>
        </>
    )
}

