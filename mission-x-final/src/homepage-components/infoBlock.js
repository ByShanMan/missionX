import React, { useState } from "react";

import { Container } from "@material-ui/core";

import InfoBoxText from "./infoBox";
import "../homepage-componentsCSS/infoBlock.css";

const InfoBoxArray = [
  {
    id: 0,
    name: "Learning Pathways",
    imgURL: "mission-x-images/homepage-images/StarLogo.png",

    main: "Interlinking Pathways",
    title:
      "This programme gives us 5 important interlinking Learning Pathways.",

    subtitle1: "COMPUTATIONAL THINKING",
    contents1:
      "Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and incapsulating applications.",

    subtitle2: "DEVELOPING DIGITAL OUTCOMES",
    contents2:
      "This programme is designed to stengthen the outcomes of each students personally to form strong applications.",

    subtitle3: "DESIGNING PROCESSED OUTCOMES",
    contents3:
      "Students will be taught the ways of how outcomes are processed, thought about, and produced.",

    subtitle4: "DEVELOP VISUAL AND SOCIAL COMMUNICATIONS",
    contents4:
      "Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.",

    subtitle5: "STRONG TECHNOLOGICAL PRACTICES",
    contents5:
      "The programme will show students the best practices to think and solve the problems brought on by using technology.",
  },
  {
    id: 1,
    name: "Digital Technology",
    imgURL: "mission-x-images/homepage-images/StarLogo.png",

    main: "Expands Knowledge Base",
    title:
      "This programme gives you the 5 major capabilities to be confident in Digital Technologies.",

    subtitle1: "PROBLEM SOLVING",
    contents1:
      "The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.",

    subtitle2: "DECISION-MAKING",
    contents2:
      "The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.",

    subtitle3: "CONFIDENCE",
    contents3:
      "When having the skills to manipulate the applications and learning to use it brings self-confidence into your life.",

    subtitle4: "HIGHER SELF-EXPECTATIONS",
    contents4:
      " This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.",

    subtitle5: "COHERENCE",
    contents5:
      "This programme offers all students a broader education that makes links within and across learning areas.",
  },
  {
    id: 2,
    name: "Key Competencies",
    imgURL: "mission-x-images/homepage-images/StarLogo.png",

    main: "Enhance Key Competencies",
    title:
      "The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum",

    subtitle1: "THINKING",
    contents1:
      "In particular the programme focused on problem solving, design thinking and computational thinking.",

    subtitle2: "DISCERNING CODES",
    contents2:
      "In particular the programme focused on problem solving, design thinking and computational thinking.",

    subtitle3: "SELF-MANAGEMENT",
    contents3:
      "Projects and challenges are designed to motivate students to explore and experiment with self-motivation.",

    subtitle4: "RELATIONSHIPS WITH PEERS",
    contents4:
      "The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.",

    subtitle5: "PARTICIPATION AND COLLABORATION",
    contents5:
      "The programme encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.",
  },
  {
    id: 3,
    name: "IR4.0",
    imgURL: "mission-x-images/homepage-images/StarLogo.png",

    main: "IR4.0",
    title:
      "Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)",

    subtitle1: "LEARNING TO LEARN",
    contents1:
      "The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.",

    subtitle2: "COMMUNITY ENGAGEMENT",
    contents2:
      "The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.",

    subtitle3: "CULTURAL DIVERSITY",
    contents3:
      "This programme is designed in New Zealand and reflects NZ's cultural diversity.",

    subtitle4: "INCLUSION",
    contents4:
      "In particular the programme is designed with accknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.",

    subtitle5: "FUTURE FOCUS",
    contents5:
      "The programme leads students to explore future themes such as artifical intelligence and augmented reality.",
  },
];

export default function InfoBlock() {
  const [activeButton, setActiveButton] = useState("b1");
  var textBox = "";

  const handleClick = (e) => {
    // console.log(e);
    setActiveButton(e.target.value);
  };

  if (activeButton === "b1") {
    textBox = <InfoBoxText props={InfoBoxArray[0]} />;
  } else if (activeButton === "b2") {
    textBox = <InfoBoxText props={InfoBoxArray[1]} />;
  } else if (activeButton === "b3") {
    textBox = <InfoBoxText props={InfoBoxArray[2]} />;
  } else if (activeButton === "b4") {
    textBox = <InfoBoxText props={InfoBoxArray[3]} />;
  }

  return (
    <Container maxWidth={"xl"}>
      <div className="infoBlock">
        <h2 className="infoBlockTitle">
          How our programmes helps teachers and students
        </h2>

        <div className="infoBlockButtons">
          <button
            value="b1"
            className={
              activeButton === "b1" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          >
            LEARNING PATHWAYS
          </button>
          <button
            value="b2"
            className={
              activeButton === "b2" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          >
            DIGITAL TECHNOLOGY
          </button>
          <button
            value="b3"
            className={
              activeButton === "b3" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          >
            KEY COMPETENCIES
          </button>
          <button
            value="b4"
            className={
              activeButton === "b4" ? "buttonStyle active" : "buttonStyle"
            }
            onClick={handleClick}
          >
            IR 4.0
          </button>
        </div>

        <div className="infoBlockText">
          <div className="infoBlockTextBox">{textBox}</div>
        </div>
      </div>
    </Container>
  );
}
