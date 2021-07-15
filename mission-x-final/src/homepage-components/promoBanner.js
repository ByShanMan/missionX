import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { makeStyles } from "@material-ui/styles"

import babyBanner from '../homepageIMG/promoBannerIMGs/babyBanner.png';

import "../componentsCSS/promoBanner.css";


const styles = makeStyles({
    signupButton: {
        background:"#F91C85",
        padding: '0.2em 3em',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: '10px',
        marginLeft: '2rem'
    },
    learnMoreButton: {
        border: '4px solid #43C0F6',
        background: '#fff',
        color: '#767676',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        fontSize: '20px',
        padding: '0em 2em',
        borderRadius: '10px',
        marginLeft: '8rem'
    },
    buttonLabel: {
        width: '100%'
    }
})




export default function PromoBanner() {

    const muiStyles = styles();

    return (

    <div className="promoBanner">
        <div className="promoPic">   
            <img className="babyImage" src={babyBanner} alt="this is baby"/>
            
                <div className="promoText">
                    <Container maxWidth="xl">
                        <h1 className="prepareYoungMinds">Prepare young minds for a better <span style={{color: "#45C1F6"}}>future.</span></h1>
                        <p className="letUsHelpYou">Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
                        <div className="ButtonGroup">
                            <div>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={muiStyles.learnMoreButton}>
                                    LEARN MORE
                                </Button>
                            </div>

                            <div className="signupWithSubtext">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={muiStyles.signupButton}>
                                    SIGN UP
                                </Button>
                                <p className="subtext">
                                *Basic subscription includes the first 15 projects free of charge.
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
        </div>  
    </div>
    )
}