import React, { useState, useEffect } from "react";

import LoggedInHeader from "../shared-components/LoggedInHeader";
import AvatarCard from "./teacher-AvatarCard";
import InfoCard from "./teacher-InfoCard";
import MainFooter from "../shared-components/MainFooter";

import "../teacher-profile-viewer-componentsCSS/teacher-projectViewer.css";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    height: "1050px",
  },
  mainGrid: {
    paddingTop: "7%",
  },
  navButtons: {
    marginLeft: "60%",
    height: "50px",
  },
  projectButton: {
    minWidth: "200px",
    marginRight: "3em",
    borderRadius: "10px",

    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    background: "rgb(229,171,44)",
  },
  dashButton: {
    minWidth: "200px",
    borderRadius: "10px",

    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    background: "rgb(249,28,133)",
  },
});

export default function ProfileViewer() {
  const styles = useStyles();
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  console.log(window.location.search);

  useEffect(() => {
    axios
      .get("http://localhost:4000/teacher-profile/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        setSelectedTeachers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projectView">
      <LoggedInHeader />
      <Container maxWidth="xl" className={styles.root}>
        
        <Grid container spacing={12} className={styles.mainGrid}>
          <Grid item xs={4}>
            {selectedTeachers.map(function (selectedTeacher, index) {
              return (
                <div key={index}>
                  <AvatarCard avatarPicture={selectedTeacher.profile_pic} />
                </div>
              );
            })}
          </Grid>

          <Grid item sm={8}>
            {selectedTeachers.map(function (selectedTeacher, index) {
              return (
                <div key={index}>
                  <InfoCard
                    fName={selectedTeacher.first_name}
                    lName={selectedTeacher.last_name}
                    school={selectedTeacher.school}
                    courses={selectedTeacher.course_purchased}
                    contact={selectedTeacher.contact_number}
                    email={selectedTeacher.email}
                    date={new Date(
                      selectedTeacher.date_of_birth
                    ).toDateString()}
                  />
                </div>
              );
            })}
          </Grid>
        </Grid>

        <div className={styles.navButtons}>
          <Button variant="contained" className={styles.projectButton}>
            back to projects
          </Button>
          <Button variant="contained" className={styles.dashButton}>
            back to dashboard
          </Button>
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
