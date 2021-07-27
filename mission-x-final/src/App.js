import React from "react";

import ProfileViewer from "./teacher-profile-viewer-components/ProfileViewer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
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
