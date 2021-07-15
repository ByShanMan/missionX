import React, {useState} from "react";

import ProfileViewer from "./components/ProfileViewer";
import StudentProfiles from './PV-students/StudentProfiles';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  const [selectedUser, setSelectedUser] = useState({})

  return (
          <>
            <Router>
                <Switch>
                    <Route path="/profile-view">
                        <ProfileViewer selectedUser={selectedUser} />
                    </Route>
                    <Route path="/student-profile">
                        <StudentProfiles setSelectedUser={setSelectedUser} />
                    </Route>
                </Switch>
            </Router>
          </>
        );
}