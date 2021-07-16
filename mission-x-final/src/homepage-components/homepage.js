import React from "react";
import Header from "./Header.js";
import PromoBanner from "./PromoBanner";
import WeOffer from "./WeOffer";
import DigitalSkills from "./DigitalSkills";
import InfoBlock from "./InfoBlock";
import BottomBanner from "./BottomPromo";
import Footer from "./footer";

import "../componentsCSS/homepage.css";

export default function Homepage() {
  return (
    <div className="homepageMain">
      <Header />
      <PromoBanner />
      <WeOffer />
      {/*<DigitalSkills />
            <InfoBlock />
            <BottomBanner />
            <Footer /> */}
    </div>
  );
}
