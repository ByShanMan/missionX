import React from "react";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      marginBottom: "6em",
      marginTop: "3em",
    },
    leftImage: {
      maxHeight: "450px",
      marginLeft: "20%",
      marginTop: "10%",
      marginBottom: "10%"
    },
    rightText: {
    
      color: '#767676',
      paddingTop: "7%",
      paddingLeft: "4%",
      paddingRight: "7%"
    },
    textHeading: {
      paddingBottom: "5%",
      fontFamily: 'Nunito',
    },
    textSubHeading: {
      paddingBottom: "5%",
      fontFamily: 'Nunito',
    },
    textInfo: {
      paddingBottom: "5%",
      fontSize: "26px",
      fontFamily: 'Nunito',
    },
    btnEnquire: {
      border: "4px solid #43C0F6",
      background: "#fff",
      color: "#767676",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
      fontSize: "20px",
      padding: "0em 2em",
      borderRadius: "10px",
    },
    btnSignUp: {
      color: "white",
      background: "#F91C85",
      padding: "0.2em 3em",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
      fontSize: "20px",
      borderRadius: "10px",
      marginLeft: "2rem",
    },
    
});

export default function BottomPromo() {
  const styles = useStyles();

  return (
    <Container maxWidth={"xl"} className={styles.root}>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <img
            className={styles.leftImage}
            src="mission-x-images/homepage-images/bottomPromoCard.png"
            alt=""
          />
        </Grid>
        <Grid item xs={6} className={styles.rightText}>
          <Typography variant="h2" className={styles.textHeading}>
            What are you waiting for?
          </Typography>
          <Typography variant="h4" className={styles.textSubHeading}>
            Start teaching Digital Technologies today.
          </Typography>
          <Typography variant="body2" className={styles.textInfo}>
            If you need more information, we are happy to answer any questions you
            may have.
          </Typography>
          <div className={styles.rightButtons}>
            <Button className={styles.btnEnquire}>ENQUIRE NOW</Button>
            <Button className={styles.btnSignUp} variant="contained">SIGN UP</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
