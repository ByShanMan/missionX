import React, { useState } from "react";

import { Container } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import WeOfferCard from "./weOfferCard.js";
import "../homepage-componentsCSS/weOffer.css";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
});

const weOfferArray = [
  {
    id: "1",
    value: "b1",
    backgroundImage: "mission-x-images/homepage-images/backgroundCard.png",
    overlayImage: "mission-x-images/homepage-images/animationOverlay.png",
    title: "ANIMATION",
  },
  {
    id: "2",
    value: "b2",
    backgroundImage: "mission-x-images/homepage-images/backgroundCard.png",
    overlayImage: "mission-x-images/homepage-images/gamesOverlay.png",
    title: "GAMES",
  },
  {
    id: "3",
    value: "b3",
    backgroundImage: "mission-x-images/homepage-images/backgroundCard.png",
    overlayImage: "mission-x-images/homepage-images/chatbotOverlay.png",
    title: "CHATBOT",
  },
  {
    id: "4",
    value: "b4",
    backgroundImage: "mission-x-images/homepage-images/backgroundCard.png",
    overlayImage: "mission-x-images/homepage-images/augmentedReality.png",
    title: "AUGMENTED REALITY",
  },
];

function createOfferCard(offerCard) {
  offerCard = offerCard[0];
  return (
    <WeOfferCard
      key={offerCard.id}
      value={offerCard.value}
      backgroundImage={offerCard.backgroundImage}
      overlayImage={offerCard.overlayImage}
      title={offerCard.title}
    />
  );
}

export default function WeOffer() {
  const styles = useStyles();
  const [activeButton, setActiveButton] = useState("b1");
  var laptopScreen = "";

  const handleClick = (e) => {
    setActiveButton(e.target.value);
  };

  const handleBigClick = (i) => {
    setActiveButton("b" + i);
  };

  if (activeButton === "b1") {
    laptopScreen = (
      <img
        className="laptopScreen"
        src="mission-x-images/homepage-images/animationScreen.png"
        alt="1"
      />
    );
  } else if (activeButton === "b2") {
    laptopScreen = (
      <img
        className="laptopScreen"
        src="mission-x-images/homepage-images/gamesScreen.png"
        alt="2"
      />
    );
  } else if (activeButton === "b3") {
    laptopScreen = (
      <img
        className="laptopScreen"
        src="mission-x-images/homepage-images/chatbotScreen.png"
        alt="3"
      />
    );
  } else if (activeButton === "b4") {
    laptopScreen = (
      <img
        className="laptopScreen"
        src="mission-x-images/homepage-images/augmentedScreen.png"
        alt="4"
      />
    );
  }

  return (
    <Container maxWidth="xl">
      <div className="weOffer">
        <div>
          <div className="weOfferText">
            <h2>What we offer</h2>
            <p>
              The Creative Problem Solving programme is series of digital
              creation aimed to encourage self-motvion and student agency,
              designed by New Zealand's leading import PropTypes from
              'prop-types' industry experts and schools.
            </p>
          </div>
          <h3 className="weOfferText2">What will students create?</h3>
          <div className="weOfferCards">
            {weOfferArray.map((item, i) => (
              <div onClick={() => handleBigClick(i + 1)} className="mapCards">
                {createOfferCard([item])}
              </div>
            ))}
          </div>
        </div>

        <div className="weOfferPic">
          <div>{laptopScreen}</div>
          <RadioGroup
            className={styles.root}
            value={activeButton}
            row
            margin="dense"
          >
            <Radio value="b1" onClick={handleClick} />
            <Radio value="b2" onClick={handleClick} />
            <Radio value="b3" onClick={handleClick} />
            <Radio value="b4" onClick={handleClick} />
          </RadioGroup>
        </div>
      </div>
    </Container>
  );
}
