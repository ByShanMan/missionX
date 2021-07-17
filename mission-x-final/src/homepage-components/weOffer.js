import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import WeOfferCard from "./weOfferCard.js";

import "../homepage-componentsCSS/weOffer.css";

const weOfferArray = [
  {
    buttonValue: "b1",
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/animationOverlay.png",
    title: "ANIMATION",
  },
  {
    buttonValue: "b2",
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/gamesOverlay.png",
    title: "GAMES",
  },
  {
    buttonValue: "b3",
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/chatbotOverlay.png",
    title: "CHATBOT",
  },
  {
    buttonValue: "b4",
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/augmentedReality.png",
    title: "AUGMENTED REALITY",
  },
];

function createOfferCard(offerCard) {
  <WeOfferCard
    buttonValue={offerCard.buttonValue}
    backgroundImage={offerCard.backgroundImg}
    overlayImage={offerCard.offerImage}
    title={offerCard.title}
  />;
}

export default function WeOffer() {
  const [activeButton, setActiveButton] = useState("b1");
  var laptopScreen = "";

  const handleClick = (e) => {
    console.log(e);
    setActiveButton(e.target.value);
  };

  if (activeButton === "b1") {
    laptopScreen = (
      <img src="Mission-X-Images/homepageImages/animationScreen.png" />
    );
  } else if (activeButton === "b2") {
    laptopScreen = (
      <img src="Mission-X-Images/homepageImages/gamesScreen.png" />
    );
  } else if (activeButton === "b3") {
    laptopScreen = (
      <img src="Mission-X-Images/homepageImages/chatbotScreen.png" />
    );
  } else if (activeButton === "b4") {
    laptopScreen = (
      <img src="Mission-X-Images/homepageImages/augmentedScreen.png" />
    );
  }

  return (
    <div className="weOffer">
      {/* <Container className="weOfferContainer" maxWidth="xl"> */}
      <Grid container spacing={2} className="weOfferLeft">
        <Grid item xs={6}>
          <div className="weOfferText">
            <h2>What we offer</h2>
            <p>
              The Creative Problem Solving programme is series of digital
              creation aimed to encourage self-motvion and student agency,
              designed by New Zealand's leading import PropTypes from
              'prop-types' industry experts and schools.
            </p>
            <h3>What will students create?</h3>
          </div>
        </Grid>
        {weOfferArray.map((item, i) => (
          <Grid item xs={8}>
            {createOfferCard(item)}
          </Grid>
        ))}
      </Grid>

      <div className="weOfferPic">
        <img className="laptopScreen" src={laptopScreen} alt="" />
        <RadioGroup className="radioButtons">
          <Radio
            value="b1"
            className={
              activeButton === "b1" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          />
          <Radio
            value="b1"
            className={
              activeButton === "b2" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          />
          <Radio
            value="b1"
            className={
              activeButton === "b3" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          />
          <Radio
            value="b1"
            className={
              activeButton === "b4" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          />
        </RadioGroup>
      </div>
      {/* </Container> */}
    </div>
  );
}
