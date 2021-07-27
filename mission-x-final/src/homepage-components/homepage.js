import React from "react";
import HomepageHeader from "../shared-components/HomepageHeader.js";
import PromoBanner from "./promoBanner";
import WeOffer from "./weOffer";
import DigitalSkills from "./digitalSkills";
import InfoBlock from "./infoBlock";
import BottomPromo from "./bottomPromo";
import MainFooter from "../shared-components/MainFooter.js"


export default function Homepage() {
  return (
    <div className="homepageMain">
      <HomepageHeader />
      <PromoBanner />
      <WeOffer />
      <DigitalSkills />
      <InfoBlock />
      <BottomPromo />
      <MainFooter /> 
    </div>
  );
}
