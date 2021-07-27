import React from "react";
import { Container } from "@material-ui/core";
import "../homepage-componentsCSS/infoBox.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  infoBoxMain: {
    marginLeft: "8em",
    display: "flex",
    flexDirection: "column",
    paddingRight: "8em",
    fontColor: "#767676",
  },
});

export default function InfoBoxText({ props }) {
  const styles = useStyles();
  console.log(props);
  return (
    <div className="mainBackground">
      <Container maxWidth="xl" className="bkcolor">
        <div className={styles.infoBoxMain}>
          <h1 className="infoBoxName">{props.main}</h1>
          <p className="infoBoxTitle">{props.title}</p>
          <div className="infoContentText">
            <div>
              <img
                style={{ objectFit: "contain", marginTop: "20px" }}
                src={props.imgURL}
                alt="logo"
              />
            </div>
            <div>
              <h3>{props.subtitle1}</h3>
              <p> {props.contents1}</p>
            </div>
          </div>

          <div className="infoContent">
            <div className="infoContentText">
              <div>
                <img
                  style={{ objectFit: "contain", marginTop: "20px" }}
                  src={props.imgURL}
                  alt="logo"
                />
              </div>
              <div>
                <h3>{props.subtitle2}</h3>
                <p>{props.contents2}</p>
              </div>
            </div>
          </div>

          <div className="infoContent">
            <div className="infoContentText">
              <div>
                <img
                  style={{ objectFit: "contain", marginTop: "20px" }}
                  src={props.imgURL}
                  alt="logo"
                />
              </div>
              <div>
                <h3>{props.subtitle3}</h3>
                <p>{props.contents3}</p>
              </div>
            </div>
          </div>

          <div className="infoContent">
            <div className="infoContentText">
              <div>
                <img
                  style={{ objectFit: "contain", marginTop: "20px" }}
                  src={props.imgURL}
                  alt="logo"
                />
              </div>
              <div>
                <h3>{props.subtitle4}</h3>
                <p>{props.contents4}</p>
              </div>
            </div>
          </div>

          <div className="infoContent">
            <div className="infoContentText">
              <div>
                <img
                  style={{ objectFit: "contain", marginTop: "20px" }}
                  src={props.imgURL}
                  alt="logo"
                />
              </div>
              <div>
                <h3>{props.subtitle5}</h3>
                <p>{props.contents5}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
