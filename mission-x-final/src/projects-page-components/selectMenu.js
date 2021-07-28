import React from 'react'

import "../projects-page-componentsCSS/selectMenu.css"

export default function SelectMenu() {
      return (
            <div className="filterMenu">

                  <h4 className="selectHeader">SUBSCRIPTION</h4>
                        <hr className="divide"></hr>
                              <input type="checkbox"></input>
                                    <label className="checkName">Free</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Premium</label>
                  
                  
                  <h4 className="selectHeader">ACTIVITY TYPE</h4>
                        <hr className="divide"></hr>
                              <input type="checkbox"></input>
                                    <label className="checkName">Animation</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Game</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Chatbot</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Augmented Reality</label>

                  
                  
                  <h4 className="selectHeader">YEAR LEVEL</h4>
                        <hr className="divide"></hr>
                              <input type="checkbox"></input>
                                    <label className="checkName">1-4</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">5-6</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">7-8</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">9-13</label>

                  
                  
                  <h4 className="selectHeader">SUBJECT MATTER</h4>
                        <hr className="divide"></hr>
                              <input type="checkbox"></input>
                                    <label className="checkName">Computer Science</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Maths</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Science</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Language</label>
                        <br></br>            
                              <input type="checkbox"></input>
                                    <label className="checkName">Art</label>
                        <br></br>
                              <input type="checkbox"></input>
                                    <label className="checkName">Music</label>
            </div>
      )
}

