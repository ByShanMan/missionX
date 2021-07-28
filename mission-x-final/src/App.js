import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TPBApp from './tpbComponents/TPBApp.js';


function App() {
  return (
      <Router>
        <div className="MainContainer">  
          <TPBApp />
        </div>
      </Router>
  );
}

export default App;