import React from "react";

import Homepage from "./homepage-components/homepage"
import ProfileViewer from "./teacher-profile-viewer-components/teacher-ProfileViewer";

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
            path="/teacher-profile/"
            exact
            component={ProfileViewer}
          />
          <Route
            path="/student-profile/"
            exact
            component={ProfileViewer}
          />
        </Switch>
      </Router>
    </>
  );
}
