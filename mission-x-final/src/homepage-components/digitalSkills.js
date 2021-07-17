import React from "react";

import { Grid } from "@material-ui/core";

import DigitalSkillsCard from "./DigitalSkillsCard";
import "../homepage-componentsCSS/digitalSkills.css";


const digitalSkillsArray = [
  {
    id: 1,
    backgroundImage: "Mission-X-Images/homepageImages/creativityCard.png",
    overlayImage: "Mission-X-Images/homepageImages/creativityOverlay.png",
    subtitle1: "Creativity ",
    subtitle2: "& Individuality",
  },
  {
    id: 2,
    backgroundImage: "Mission-X-Images/homepageImages/criticalThinkingCard.png",
    overlayImage: "Mission-X-Images/homepageImages/criticalThinkingOverlay.png",
    subtitle1: "Critical Thinking ",
    subtitle2: "& Problem Solving",
  },
  {
    id: 3,
    backgroundImage: "Mission-X-Images/homepageImages/communicationCard.png",
    overlayImage: "Mission-X-Images/homepageImages/communicationOverlay.png",
    subtitle1: "Communication ",
    subtitle2: "& Collaboration",
  },
  {
    id: 4,
    backgroundImage: "Mission-X-Images/homepageImages/futureFocusCard.png",
    overlayImage: "Mission-X-Images/homepageImages/futureFocusOverlay.png",
    subtitle1: "Technology ",
    subtitle2: "& Future Focus",
  },
];

function createCard(dSkills) {
  <DigitalSkillsCard
    backgroundImage={dSkills.backgroundImage}
    overlayIamge={dSkills.overlayIamge}
    subtitle1={dSkills.subtitle1}
    subtitle2={dSkills.subtitle2}
  />;
}

export default function DigitalSkills() {
  return (
    <div className="digitalSkills">
      <div className="digitalSkillsText">
        <h3>
          Teaching kids programming and digital skills is MORE than just writing
          code.
        </h3>
      </div>
      <Grid container spacing={12}>
        {digitalSkillsArray.map((item, i) => (
          <Grid item xs={3}>
            {createCard(item)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
