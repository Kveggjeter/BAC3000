import region from "../../assets/images/region.png";
import categories from "../../assets/images/categories.png";
import {UseFilter} from "../../hooks/FilterContext.tsx";

export function FilterNav() {

    const { filters, toggleFilter } = UseFilter();

    return (
        <>
            <ul className="filterList">
                <li className="filterHeader">
                    <img src={region} alt="" className="filterIcon"/>
                    <a className="filterText">Region</a>
                </li>
                <ul className="filterOptions">
                    {["Africa", "Asia", "Europe", "Oceania", "North-America", "South-America"].map((reg) => (
                        <li className="altern" key={reg}>
                            <input type="checkbox" id={reg.toLowerCase()}
                                   value={reg} checked={filters.regions.includes(reg)}
                                   onChange={() => toggleFilter("regions", reg)} />
                            <label className="lname" htmlFor={reg.toLowerCase()}>{reg}</label>
                        </li>
                    ))}
                </ul>
                <li className="filterHeader">
                    <img src={categories} alt="" className="filterIcon"/>
                    <a className="filterText">Category</a>
                </li>
                <ul className="filterOptions">
                    {["Business", "Crime", "Culture", "Politics", "Science", "Sports"].map((cat) => (
                        <li className="altern" key={cat}>
                            <input type="checkbox" id={cat.toLowerCase()} value={cat}
                                   checked={filters.category.includes(cat)} onChange={() => toggleFilter("category", cat)} />
                            <label className="lname" htmlFor={cat.toLowerCase()}>{cat}</label>
                        </li>
                    ))}
                </ul>
            </ul>
        </>
    )
}