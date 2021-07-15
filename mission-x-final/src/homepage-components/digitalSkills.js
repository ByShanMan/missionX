import React from 'react'

import creativityCard from "../homepageIMG/digitalSkillsIMGs/creativityCard.png";
import creativityOverlay from "../homepageIMG/digitalSkillsIMGs/creativityOverlay.png";
import criticalThinkingCard from "../homepageIMG/digitalSkillsIMGs/criticalThinkingCard.png";
import criticalThinkingOverlay from "../homepageIMG/digitalSkillsIMGs/criticalThinkingOverlay.png";
import communicationCard from "../homepageIMG/digitalSkillsIMGs/communicationCard.png";
import communicationOverlay from "../homepageIMG/digitalSkillsIMGs/communicationOverlay.png";
import futureFocusCard from "../homepageIMG/digitalSkillsIMGs/futureFocusCard.png";
import futureFocusOverlay from "../homepageIMG/digitalSkillsIMGs/futureFocusOverlay.png";

import "./homepage-componentsCSS/digitalSkills.css"


export default function DigitalSkills() {
    return (
        <div className="digitalSkills">
                
            <div className="digitalSkillsText">
                <h3>Teaching kids programming and digital skills is MORE than just writing code.</h3>
            </div>
                <div className="digitalSkillsArea">

                    <div className="digitalSkillsCard">
                        <img className="photoCard" src={creativityCard} alt="" />
                        <img className="iconOverlay" src={creativityOverlay} alt="" />
                        <p>
                            Creativity 
                        <br />
                            & Individuality
                        </p>
                    </div>

                    <div className="digitalSkillsCard">
                        <img className="photoCard" src={criticalThinkingCard} alt="" />
                        <img className="iconOverlay" src={criticalThinkingOverlay} alt="" />
                        <p>
                            Critical Thinking 
                        <br />
                            & Problem Solving
                        </p>
                    </div>

                    <div className="digitalSkillsCard">
                        <img className="photoCard" src={communicationCard} alt="" />
                        <img className="iconOverlay" src={communicationOverlay} alt="" />
                        <p>
                            Communication 
                        <br />
                            & Collaboration
                        </p>
                    </div>

                    <div className="digitalSkillsCard">
                        <img className="photoCard" src={futureFocusCard} alt="" />
                        <img className="iconOverlay" src={futureFocusOverlay} alt="" />
                        <p>
                            Technology 
                        <br />
                            & Future Focus
                        </p>
                    </div>

                </div>
        </div>    
    )
}
