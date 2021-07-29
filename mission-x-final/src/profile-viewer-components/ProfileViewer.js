import React, { useState, useEffect } from "react";

import LoggedInHeader from "../shared-components/LoggedInHeader";
import AvatarCard from "./AvatarCard";
import InfoCard from "./InfoCard";
import InfoCard2 from "./InfoCard2";
import MainFooter from "../shared-components/MainFooter";

import "../profile-viewer-componentsCSS/ProfileViewer.css";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    height: "1050px",
  },
  mainGrid: {
    paddingTop: "7%",
  },
  navButtons: {
    marginLeft: "58%",
    height: "50px",
  },
  projectButton: {
    "&:hover": {
      background: "rgb(249,28,133)",
    },
    minWidth: "200px",
    borderRadius: "10px",

    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    background: "rgb(249,28,133)",
  },
  dashButton: {
    "&:hover": {
      background: "gold",
    },
    marginLeft: "60px",
    minWidth: "200px",
    borderRadius: "10px",

    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    background: "gold",
  },
});

export default function ProfileViewer() {
  const styles = useStyles();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [ActiveInfoCard, setActiveInfoCard] = useState("");
  const [ActiveDashButtons, setActiveDashButtons] = useState("");

  console.log(window.location.search);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        response.data[0].role === "teacher"
          ? handleTeacherUser(response.data[0])
          : handleStudentUser(response.data[0]);
        setSelectedUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTeacherUser = (user) => {
    console.log("teacher user");
    setActiveInfoCard(
      <Grid item sm={8}>
        <div>
          <InfoCard
            fName={user.first_name}
            lName={user.last_name}
            school={user.school}
            course={user.course_purchased}
            contact={user.contact_number}
            date={new Date(user.date_of_birth).toDateString()}
            email={user.email}
          />
        </div>
      </Grid>
    );
    setActiveDashButtons(
      <div>
        <Link to="/projects">
          <Button variant="contained" className={styles.projectButton}>
            back to projects
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="contained" className={styles.dashButton}>
            back to dashboard
          </Button>
        </Link>
      </div>
    );
  };

  const handleStudentUser = (user) => {
    console.log("student user");

    setActiveInfoCard(
      <Grid item sm={8}>
        <div>
          <InfoCard2
            fName={user.first_name}
            lName={user.last_name}
            school={user.school}
            teacher={user.teacher_id}
            contact={user.contact_number}
            date={new Date(user.date_of_birth).toDateString()}
            email={user.email}
          />
        </div>
      </Grid>
    );
    setActiveDashButtons(
      <Link to="/projects">
        <Button variant="contained" className={styles.projectButton}>
          back to projects
        </Button>
      </Link>
    );
  };

  return (
    <div className="projectView">
      <LoggedInHeader />
      <Container maxWidth="xl" className={styles.root}>
        <Grid container spacing={12} className={styles.mainGrid}>
          <Grid item xs={4}>
            {selectedUsers.map(function (selectedUser, index) {
              return (
                <div key={index}>
                  <AvatarCard avatarPicture={selectedUser.profile_pic} />
                </div>
              );
            })}
          </Grid>
          {ActiveInfoCard}
        </Grid>
        <div className={styles.navButtons}>{ActiveDashButtons}</div>
      </Container>
      <MainFooter />
    </div>
  );
}
