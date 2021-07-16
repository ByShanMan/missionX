import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

<<<<<<< HEAD
import "../homepage-componentsCSS/weOffer.css";
import WeOfferCard from "./WeOfferCard.js";
=======
import "./homepage-componentsCSS/weOffer.css";
import weOfferArray from './weOfferArr.js'
>>>>>>> a751d051cfb0fc2c597128777bffcbc672ffd9f3

import animationScreen from "../homepageIMG/weOfferIMGs/animationScreen.png";
import gamesScreen from "../homepageIMG/weOfferIMGs/gamesScreen.png";
import chatbotScreen from "../homepageIMG/weOfferIMGs/chatbotScreen.png";
import augmentedScreen from "../homepageIMG/weOfferIMGs/augmentedScreen.png";

const weOfferArray = [
  {
    id: 1,
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/animationOverlay.png",
    title: "ANIMATION",
  },
  {
    id: 2,
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/gamesOverlay.png",
    title: "GAMES",
  },
  {
    id: 3,
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/chatbotOverlay.png",
    title: "CHATBOT",
  },
  {
    id: 4,
    backgroundImage: "Mission-X-Images/homepageImages/backgroundCard.png",
    overlayImage: "Mission-X-Images/homepageImages/augmentedReality.png",
    title: "AUGMENTED REALITY",
  },
];

function createOfferCard(offerCard) {
  <WeOfferCard
    backgroundImage={offerCard.backgroundImg}
    overlayImage={offerCard.offerImage}
    title={offerCard.title}
  />;
}

export default function WeOffer() {
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

{/*------This needs to have conditional rendering to show different laptop pics-----*/}

      <div className="weOfferPic">
        <img className="laptopScreen" src={animationScreen} alt="" />
        <RadioGroup className="radioButtons">
          <Radio />
          <Radio />
          <Radio />
          <Radio />
        </RadioGroup>
      </div>
      {/* </Container> */}
    </div>
  );
}
