import React, { useState } from "react";
import { Link } from "react-router-dom";

import InstructionsPage from "../spbPages/Instr";
import LearningObjectives from "../spbPages/LearnObj";
import MakeProject from "../spbPages/MakePro";
import SubmitProject from "../spbPages/SubPro";
import VideoTutorial from "../spbPages/Video";
import "../spbCSS/SPBTabs.css";

import { TrackChangesIcon, FormatListNumberedIcon, OndemandVideoSharp, 
  FileCopyOutlined, PublishOutlined, PlaylistAddCheckOutlined } from '@material-ui/icons';

export default function SPBTabs() {
  const [showAll, showIcons] = useState(false);

  // chevron mechanism
  const tabControl = () => {
    if (showAll === true) {
      showIcons(false);
    } else {
      showIcons(true);
    }
  };

  const [activeButton, setActiveButton] = useState("t1");

  
  const handleClick = (e) => {
    setActiveButton(e.target.value);
    console.log(activeButton);
  };

  //to display the pages to the right
  var loadDisplay;

  if (activeButton === "t1") {
    loadDisplay = <LearningObjectives />;
  } else if (activeButton === "t2") {
    loadDisplay = <InstructionsPage />;
  } else if (activeButton === "t3") {
    loadDisplay = <VideoTutorial />;
  } else if (activeButton === "t4") {
    loadDisplay = <MakeProject />;
  } else if (activeButton === "t5") {
    loadDisplay = <SubmitProject />;
  }

  return (
    <div className="spb-tabs-area">
      <div className="spb-display-area">
        <div className={showAll === false ? "tabs-showAll" : "active-reveal"}>
          <div className={showAll === true ? "tabs-showIcons" : "hide-reveal"}>
            

            {/* collapsed tabs */}
            <div className="collapsedTabsFull">
            <div className="collapsedTabs">
            <div className="avatar-onTabs"></div>

            
            <button value="t1" onClick={handleClick} className={activeButton === "t1" ? "active-select-tab1" : ""}>
            <img src = {activeButton === "t1" ? "./Mission X Images/Project Builder/objectives dark@2x.png":"./Mission X Images/Project Builder/objectives@2x.png"} /> </button>

            <button value="t2" onClick={handleClick} className={activeButton === "t2" ? "active-select-tab2" : ""} >
            <img src= {activeButton === "t2"? "./Mission X Images/Project Builder/steps dark@2x.png":"./Mission X Images/Project Builder/steps@2x.png"}/> </button>

            <button value="t3" onClick={handleClick} className={activeButton === "t3" ? "active-select-tab3" : ""} >
              <img src = {activeButton === "t3"? "./Mission X Images/Project Builder/video dark@2x.png":"./Mission X Images/Project Builder/video@2x.png"} /> </button>
           
            <button value="t4" onClick={handleClick} className={activeButton === "t4" ? "active-select-tab4" : ""} >
              <img src = {activeButton === "t4"? "./Mission X Images/Project Builder/new proj dark@2x.png":"./Mission X Images/Project Builder/new proj@2x.png"} /> </button>

            <button value="t5" onClick={handleClick} className={activeButton === "t5" ? "active-select-tab5" : ""} >
              <img src = {activeButton === "t5"? "./Mission X Images/Project Builder/submit proj dark@2x.png":"./Mission X Images/Project Builder/submit proj@2x.png"} /> </button>
            
            <button value="t6" onClick={handleClick} className={activeButton === "t6" ? "active-select-tab6" : ""} >
              <img src = {activeButton === "t6"? "./Mission X Images/Project Builder/prize copy@2x.png":"./Mission X Images/Project Builder/prize copy@2x.png"} /> </button>

            <button value="t7" onClick={handleClick} className={activeButton === "t7" ? "active-select-tab7" : "select-tab7"} >
              <img src = {activeButton === "t7"? "./Mission X Images/Project Builder/list copy@2x.png":"./Mission X Images/Project Builder/list copy@2x.png"} /> </button>
            </div>





       {/* arrow to expand tabs */}
      <div className={showAll === true ? "switch-chevronR" : "move-arrow"} onClick={tabControl}>
          <img alt="right arrow" src="./Mission X Images/Project Builder/Icon open-caret-right.png" />{" "}
      </div>



      {/* for the little thingys at the bottom left */}
        <div className="spb-tabs-tiny-links">
          <Link className="link" to="/profilePage">
            <img src="./Mission X Images/Project Builder/Icon awesome-user-circle@2x.png" alt="profile" />
          </Link>

            <img src="./Mission X Images/Project Builder/Icon material-settings@2x.png"alt="settings" />

          <Link className="link" to="/">
             <img src="./Mission X Images/Project Builder/Icon awesome-sign-out-alt@2x.png" alt="logout" />
          </Link>

         </div>
        </div>
      </div>
       {/* valid */}


        <div className="tabsExpanded">
        {/* top avatar */}
        <div className="avatar-area">
            <img src="./Mission X Images/Project Builder/Ellipse 38@2x.png" alt="avatar" />
        </div>

        <button value="t1" onClick={handleClick} className={activeButton === "t1" ? "active" : ""} >
          <img src=
         {activeButton === "t1"? "./Mission X Images/Project Builder/objectives dark@2x.png":"./Mission X Images/Project Builder/objectives@2x.png"}
            alt="target"/> 
            LEARNING OBJECTIVES
        </button>

        <button value="t2" onClick={handleClick} className={activeButton === "t2" ? "active" : ""} >
          <img src=
        {activeButton === "t2"? "./Mission X Images/Project Builder/steps dark@2x.png":"./Mission X Images/Project Builder/steps@2x.png"}
            alt="process image"/> INSTRUCTIONS
        </button>

        <button value="t3" onClick={handleClick} className={activeButton === "t3" ? "active" : ""} >
          <img src=
        {activeButton === "t3"? "./Mission X Images/Project Builder/video dark@2x.png":"./Mission X Images/Project Builder/video@2x.png"}
            alt="video play image"/> VIDEO TUTORIAL
        </button>

        <button value="t4" onClick={handleClick} className={activeButton === "t4" ? "active" : ""} >
          <img src=
        {activeButton === "t4"? "./Mission X Images/Project Builder/new proj dark@2x.png":"./Mission X Images/Project Builder/new proj@2x.png"}
            alt="screen new file image"/> MAKE PROJECT
        </button>

        <button value="t5" onClick={handleClick} className={activeButton === "t5" ? "active" : ""} >
          <img src=
        {activeButton === "t5"? "./Mission X Images/Project Builder/submit proj dark@2x.png":"./Mission X Images/Project Builder/submit proj@2x.png"}
            alt="submit image"/> SUBMIT PROJECT
        </button>

      {/* DISABLED BUTTONS */}
        <button disabled value="t6" onClick={handleClick} className={activeButton === "t6" ? "active" : ""} >
          <img src=
        {activeButton === "t6"? "./Mission X Images/Project Builder/prize copy@2x.png":"./Mission X Images/Project Builder/prize copy@2x.png"}
            alt="badge image"/> BONUS CHALLENGE
        </button>

        <button disabled value="t7" onClick={handleClick} className={activeButton === "t7" ? "active" : ""} >
          <img src=
        {activeButton === "t7"? "./Mission X Images/Project Builder/list copy@2x.png":"./Mission X Images/Project Builder/list copy@2x.png"}
            alt="list quiz image"/> TAKE THE QUIZ
        </button>
        </div>

    {/* little buttons at the bottom of the tabs */}
    <div className="spb-tiny-links">
            <Link className="link" to="/profilePage">
              <div className="bottom-left">
                <img src="./Mission X Images/Project Builder/Icon awesome-user-circle@2x.png" alt="" />
                <div>Profile</div>
              </div>
            </Link>

          <div className="bottom-left">
            <img src="./Mission X Images/Project Builder/Icon material-settings@2x.png" alt="" />
            <div>Settings</div>
          </div>

          <Link className="link" to="/">
              <div className="bottom-left">
                <img src="./Mission X Images/Project Builder/Icon awesome-sign-out-alt@2x.png" alt="" />
                <div>Logout</div>
              </div>
          </Link>


          </div>
        </div>

        {/* arrow pointing left to collapse the tabs */}
        <div
          className={showAll === true ? "move-arrow" : "switch-chevronL"}
          onClick={tabControl}>
          <img src="./Mission X Images/Project Builder/Icon open-caret-left.png" alt="left arrow"/>
        </div>

        <div className="spb-display">
          <div className="butt-display-area">
            <button className="takeButt">Take Screenshot</button>
            <button className="askButt">Ask Teacher for help</button>
            <button className="moreButt">More Projects</button>
          </div>
          {loadDisplay}
        </div>

        </div>
      </div>
  );
}
