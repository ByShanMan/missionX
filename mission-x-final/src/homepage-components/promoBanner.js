import React from "react";

import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import "../homepage-componentsCSS/promoBanner.css";

const useStyles = makeStyles({
  signupButton: {
    background: "#F91C85",
    padding: "0.2em 3em",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
    fontSize: "20px",
    borderRadius: "10px",
    marginLeft: "2rem",
  },
  learnMoreButton: {
    border: "4px solid #43C0F6",
    background: "#fff",
    color: "#767676",
    fontFamily: "Segoe UI",
    fontWeight: "bold",
    fontSize: "20px",
    padding: "0em 2em",
    borderRadius: "10px",
    marginLeft: "8rem",
  },
  buttonLabel: {
    width: "100%",
  },
});

export default function PromoBanner() {
  const styles = useStyles();

  return (
    <div className="promoBanner">
      <div className="promoPic">
        <img
          className="babyImage"
          src="Mission-X-Images/homepageImages/babyBanner.png"
          alt=""
        />
      </div>
      <Container maxWidth={"xl"}>
        <div className="promoText">
            <h1 className="prepareYoungMinds">
              Prepare young minds for a better <span>future.</span>
            </h1>
            <p className="letUsHelpYou">
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </p>
            <div className="buttonGroup">
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.learnMoreButton}
                >
                  LEARN MORE
                </Button>
              </div>

              <div className="signupWithSubtext">
                <Button
                  variant="contained"
                  color="secondary"
                  className={styles.signupButton}
                >
                  SIGN UP
                </Button>
              </div>
            </div>
            <p className="subtext">
              *Basic subscription includes the first 15 projects free of charge.
            </p>
        </div>
      </Container>
    </div>
  );
}
