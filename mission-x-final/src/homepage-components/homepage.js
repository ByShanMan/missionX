import React from 'react';
import Header from "./header.js";
import PromoBanner from "./promoBanner";
import WeOffer from "./weOffer";
import DigitalSkills from "./digitalSkills"
import InfoBlock from "./infoBlock";
import BottomBanner from "./bottomPromo"
import Footer from './footer';

import "../componentsCSS/homepage.css"

export default function Homepage() {
    return (

        <div className="homeMainpage">
            <Header />
            <PromoBanner />
            <WeOffer />
            {/*<DigitalSkills />
            <InfoBlock />
            <BottomBanner />
            <Footer /> */}
        </div>
    )
}

