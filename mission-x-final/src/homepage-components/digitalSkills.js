import React from "react";

import { Container } from "@material-ui/core";

import DigitalSkillsCard from "./DigitalSkillsCard";
import "../homepage-componentsCSS/digitalSkills.css";

const digitalSkillsArray = [
  {
    id: 1,
    backgroundImage: "mission-x-images/homepage-images/creativityCard.png",
    overlayImage: "mission-x-images/homepage-images/creativityOverlay.png",
    overlayTitle1: "Creativity ",
    overlayTitle2: "& Individuality",
  },
  {
    id: 2,
    backgroundImage: "mission-x-images/homepage-images/criticalThinkingCard.png",
    overlayImage: "mission-x-images/homepage-images/criticalThinkingOverlay.png",
    overlayTitle1: "Critical Thinking ",
    overlayTitle2: "& Problem Solving",
  },
  {
    id: 3,
    backgroundImage: "mission-x-images/homepage-images/communicationCard.png",
    overlayImage: "mission-x-images/homepage-images/communicationOverlay.png",
    overlayTitle1: "Communication ",
    overlayTitle2: "& Collaboration",
  },
  {
    id: 4,
    backgroundImage: "mission-x-images/homepage-images/futureFocusCard.png",
    overlayImage: "mission-x-images/homepage-images/futureFocusOverlay.png",
    overlayTitle1: "Technology ",
    overlayTitle2: "& Future Focus",
  },
];

function createCard(dSkills) {
  return (
    <DigitalSkillsCard
      key={dSkills.id}
      backgroundImage={dSkills.backgroundImage}
      overlayImage={dSkills.overlayImage}
      overlayTitle1={dSkills.overlayTitle1}
      overlayTitle2={dSkills.overlayTitle2}
    />
  );
}

export default function DigitalSkills() {
  return (
    <Container maxWidth={"xl"}>
      <div className="digitalSkills">
        <div className="digitalSkillsText">
          <h3>
            Teaching kids programming and digital skills is MORE than just
            writing code.
          </h3>
        </div>
        <div className="cardDisplay">
          {digitalSkillsArray.map((item, i) => (
            <div>{createCard(item)}</div>
          ))}
        </div>
      </div>
    </Container>
  );
}
