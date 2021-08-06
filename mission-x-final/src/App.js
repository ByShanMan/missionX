import React from 'react'

import ProjectsPage from './projects-page-components/projectsPage';
import Homepage from "./homepage-components/homepage"
import ProfileViewer from "./profile-viewer-components/ProfileViewer";
import TPBApp from './tpbComponents/TPBApp';
import SPBApp from './spbComponents/SPBApp';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
          path="/"
          exact
          component={Homepage}
          />
          <Route
            path="/profile/"
            exact
            component={ProfileViewer}
          />
          <Route
          path="/projects"
          exact
          component={ProjectsPage}
          />
          <Route path="/teacherprojectbuilder"
          exact component={TPBApp}/>
          
          <Route path="/studentprojectbuilder"
          exact component={SPBApp}/>
        </Switch>
      </Router>
    </>
      
    
  );
}
