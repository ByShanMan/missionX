import React from "react";

import ProfileViewer from "./student-profile-viewer-components/ProfileViewer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/profile-viewer/"
            exact
            component={ProfileViewer}
          />
        </Switch>
      </Router>
    </>
  );
}
