import React, {useState} from 'react'
import InfoBoxArray from './infoBoxArr'
import InfoBoxText from './infoBox';

import "../componentsCSS/infoBlock.css"

export default function InfoBlock() {

    const [activeButton, setActiveButton] = useState('b1')
    var textBox = '';

    const handleClick = (e) => {
        console.log(e)
        setActiveButton(e.target.value)
    }
    
    if (activeButton === 'b1') {
        textBox = <InfoBoxText props={InfoBoxArray[0]} />;
    } else if (activeButton === 'b2') {
        textBox = <InfoBoxText props={InfoBoxArray[1]} />;
    } else if (activeButton === 'b3') {
        textBox = <InfoBoxText props={InfoBoxArray[2]} />;
    } else if (activeButton === 'b4') {
        textBox = <InfoBoxText props={InfoBoxArray[3]} />;
    }

    return (
        <div className="infoBlock">
            <h2 className="infoBlockTitle">
                How our programmes helps teachers and students
            </h2>

            <div className="infoBlockButtons">
                <button value="b1" className={activeButton === 'b1' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>LEARNING PATHWAYS</button>
                <button value="b2" className={activeButton === 'b2' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>DIGITAL TECHNOLOGY</button>
                <button value="b3" className={activeButton === 'b3' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>KEY COMPETENCIES</button>
                <button value="b4" className={activeButton === 'b4' ? "buttonStyle active" : "buttonStyle"} onClick={handleClick}>IR 4.0</button>
            </div>
           
            <div className="infoBlockText">
                <div className="infoBlockTextBox">
                    {textBox}
                </div>
            </div>
        </div>
    )
}
