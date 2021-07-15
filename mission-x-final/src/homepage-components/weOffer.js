import React from 'react';

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import "./homepage-componentsCSS/weOffer.css";
import weOfferArray from './weOfferArr.js'

import animationScreen from "../homepageIMG/weOfferIMGs/animationScreen.png";
import gamesScreen from "../homepageIMG/weOfferIMGs/gamesScreen.png";
import chatbotScreen from "../homepageIMG/weOfferIMGs/chatbotScreen.png";
import augmentedScreen from "../homepageIMG/weOfferIMGs/augmentedScreen.png";
import weOfferCard from './weOfferCard';


export default function WeOffer() {
    return (
        <div className="weOffer">
            {/* <Container className="weOfferContainer" maxWidth="xl"> */}
                <Grid container spacing = {2} className="weOfferLeft">
                    <Grid item xs={6}>
                        <div className="weOfferText">
                            <h2>What we offer</h2>
                            <p>The Creative Problem Solving programme is series of digital creation aimed to encourage 
                                self-motvion and student agency, designed by New Zealand's leading import PropTypes from 'prop-types'
                                industry experts and schools.</p>
                            <h3>What will students create?</h3>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                       <weOfferCard />
                    </Grid>
                </Grid>
                <div className="weOfferPic">
                    <img className="laptopScreen" src={animationScreen} alt= "" />
                    <RadioGroup className="radioButtons">
                        <Radio />
                        <Radio />
                        <Radio />
                        <Radio />
                    </RadioGroup>
                </div>
            {/* </Container> */}
        </div>
    )
}
