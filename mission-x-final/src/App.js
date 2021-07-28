import React from 'react'

import ProjectsPage from './projects-page-components/projectsPage';
import Homepage from "./homepage-components/homepage"
import ProfileViewer from "./profile-viewer-components/ProfileViewer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
          path="/home"
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
        </Switch>
      </Router>
    </>
      
    
  );
}
