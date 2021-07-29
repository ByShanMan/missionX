import React from 'react';
import './HeaderStyle.css';

function Header2() {
    return (
        <div className="header2">
            <div className="headerLogo">
                <a href="/">
                    <img src="Mission-X-Images/dashboard-images/starlogo.png" alt="logo" />
                </a>
            </div>
            <div className="spacer">
            </div>
            <div className="header-flags">
                <img id="maori-flag" src="Mission-X-Images/shared-images/MaoriFlag.png" alt="maoriflag" />
                <img id="nz-flag" src="Mission-X-Images/shared-images/NZFlag.png" alt="nz flag"/>
            </div>
        </div>
    );
}

export default Header2;