import React from 'react';  
import '../tpbCSS/Header3.css';


function Header3() {
    return (
        <div className="headerThree">
        <a id="headerLogos" href="/"> <img src="Mission X Images/Project Builder/Star Logo 07-3.png" alt="starlogo" /> </a>
                
                <div className="projectHeader">
                <h2>PROJECT</h2>
                <p>Introduction</p>
                </div>    

                <div className="progressButtons">
                    <button id="Dot"><h1>1</h1></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button>
                    <button id="dot"></button> 
                </div>


            <div className="flagsHeaders">
            <img id="langThree" src="Mission X Images/Project Builder/LANG.png" alt="lang"/>
            <img id="maoriFlagThree" src="Mission X Images/Project Builder/Maori Flag.png" alt="maoriflag"/>
            <img id="nzFlagThree"src="Mission X Images/Project Builder/NZ Flag.png" alt="nzflag" />
            </div>
    </div>

    );
}

export default Header3;
