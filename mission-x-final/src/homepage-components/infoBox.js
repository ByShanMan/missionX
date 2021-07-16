import React from "react";
import "../componentsCSS/infoBox.css";
import { Container } from "@material-ui/core";

export default function InfoBoxText({ props }) {
  console.log(props);
  return (
    <div className="infoBoxMain">
      <Container maxWidth="xl" className="bkcolor">
        <div className="infoBoxMain">
          <h2 className="infoBoxName">{props.main}</h2>
          <p className="infoBoxTitle">{props.title}</p>
          <br />
          <div className="infoContent">
            <div className="infoContentText">
              <h3 className="">{props.subtitle1}</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ objectFit: "contain" }}
                  src={props.imgURL}
                  alt="logo"
                />
                <p>{props.contents1}</p>
              </div>
            </div>
          </div>
          <br />
          <div className="infoContent">
            <div className="infoContentText">
              <h3>{props.subtitle2}</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ objectFit: "contain" }}
                  src={props.imgURL}
                  alt="logo"
                />
                <p>{props.contents2}</p>
              </div>
            </div>
          </div>
          <br />

          <div className="infoContent">
            <div className="infoContentText">
              <h3>{props.subtitle3}</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ objectFit: "contain" }}
                  src={props.imgURL}
                  alt="logo"
                />
                <p>{props.contents3}</p>
              </div>
            </div>
          </div>
          <br />

          <div className="infoContent">
            <div className="infoContentText">
              <h3>{props.subtitle4}</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ objectFit: "contain" }}
                  src={props.imgURL}
                  alt="logo"
                />
                <p>{props.contents4}</p>
              </div>
            </div>
          </div>
          <br />

          <div className="infoContent">
            <div className="infoContentText">
              <h3>{props.subtitle5}</h3>
              <div style={{ display: "flex" }}>
                <img
                  style={{ objectFit: "contain" }}
                  src={props.imgURL}
                  alt="logo"
                />
                <p>{props.contents5}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
