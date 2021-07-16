import React from "react";
import Header from "./Header.js";
import PromoBanner from "./PromoBanner";
import WeOffer from "./WeOffer";
import DigitalSkills from "./DigitalSkills";
import InfoBlock from "./InfoBlock";
import BottomPromo from "./BottomPromo";
import Footer from "./Footer";

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
