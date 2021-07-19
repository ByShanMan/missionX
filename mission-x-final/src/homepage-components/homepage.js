import React from "react";
import Header from "../shared-components/homepage-Header.js";
import PromoBanner from "./promoBanner";
import WeOffer from "./weOffer";
import DigitalSkills from "./digitalSkills";
import InfoBlock from "./infoBlock";
import BottomPromo from "./bottomPromo";
import Footer from "../shared-components/Footer.js"


export default function Homepage() {
  return (
    <div className="homepageMain">
      <Header />
      <PromoBanner />
      <WeOffer />
      <DigitalSkills />
      <InfoBlock />
      <BottomPromo />
      <Footer /> 
    </div>
  );
}
