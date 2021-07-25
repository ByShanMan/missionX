import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SPBApp from './spbComponents/SPBApp.js';


function App() {
  return (
      <Router>
        <div className="MainContainer">  
          <SPBApp />
        </div>
      </Router>
  );
}

export default App;