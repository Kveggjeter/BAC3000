export function Legend() {

    return (
        <>
            <div className="legend">
                <ul className="legendItems">
                    <li id="crime" className="legendBox">
                        <p className="legendText">Crime</p>
                        <div id="crimeBox" className="colorBox"></div>
                    </li>
                    <li id="culture" className="legendBox">
                        <p className="legendText">Culture</p>
                        <div id="cultureBox" className="colorBox"></div>
                    </li>
                    <li id="business" className="legendBox">
                        <p className="legendText">Business</p>
                        <div id="businessBox" className="colorBox"></div>
                    </li>
                    <li id="science" className="legendBox">
                        <p className="legendText">Science</p>
                        <div id="scienceBox" className="colorBox"></div>
                    </li>
                    <li id="politics" className="legendBox">
                        <p className="legendText">Politics</p>
                        <div id="politicsBox" className="colorBox"></div>
                    </li>
                    <li id="sport" className="legendBox">
                        <p className="legendText">Sports</p>
                        <div id="sportsBox" className="colorBox"></div>
                    </li>
                    <li id="unknown" className="legendBox">
                        <p className="legendText">Unknown</p>
                        <div id="unknownBox" className="colorBox"></div>
                    </li>
                </ul>
            </div>
        </>
    )
}