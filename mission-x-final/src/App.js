import React from "react";

import ProfileViewer from "./student-profile-viewer-components/ProfileViewer";
import StudentProfiles from "./student-profile-viewer-components/StudentProfiles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/profile-view/:user_id"
            exact
            component={ProfileViewer}
          />
          <Route 
            path="/student-profiles"
            exact
            component={StudentProfiles} 
          />
        </Switch>
      </Router>
    </>
  );
}
