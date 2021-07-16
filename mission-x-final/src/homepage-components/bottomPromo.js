import React from "react";
import './homepage-componentsCSS/bottomPromo.css'

export default function BottomPromo() {
  return (
    <div className="bottomPromo">
      <div className="bottomPromoPic">
        <img
          src="/Mission-X-Images/homepageImages/bottomPromoCard.png"
          alt=""
        />
      </div>
      <div className="bottomPromoText">
        <h2>What are you waiting for?</h2>
        <br />
        <br />
        <h3>Start teaching Digital Technologies today.</h3>
        <br />
        <br />
        <p>
          If you need more information, we are happy to answer any questions you
          may have.
        </p>
        <div className="bottomPromoButtons">
          <button className="button1">ENQUIRE NOW</button>
          <button className="button2">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
