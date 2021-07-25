import React from 'react';  
import '../spbCSS/Header3.css';
import Button from '@material-ui/core/Button';


function Header3() {
    return (
        <div className="headerThree" style={{width:'1920'}}>
        <a id="headerLogos" href="/"> <img src="Mission X Images/Project Builder/Star Logo 07-3.png" alt="starlogo" /> </a>
                
                
                <h2>Project</h2>
                <h3>Introduction</h3>
                    
                {/* <div className="progressButtons">
                    <Button id="Dot">1</Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button>
                    <Button id="dot"></Button> 
                </div> */}


            <div className="flagsHeaders">
            <img id="langThree" src="Mission X Images/Project Builder/LANG.png" alt="lang"/>
            <img id="maoriFlagThree" src="Mission X Images/Project Builder/Maori Flag.png" alt="maoriflag"/>
            <img id="nzFlagThree"src="Mission X Images/Project Builder/NZ Flag.png" alt="nzflag" />
            </div>
        </div>

    );
}

export default Header3;
