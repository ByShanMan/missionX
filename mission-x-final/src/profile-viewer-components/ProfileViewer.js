import React, { useState, useEffect } from "react";

import LoggedInHeader from "../shared-components/LoggedInHeader";
import AvatarCard from "./AvatarCard";
import InfoCard from "./InfoCard";
import MainFooter from "../shared-components/MainFooter";

import "../profile-viewer-componentsCSS/ProfileViewer.css";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    height: "1050px",
  },
  mainGrid: {
    paddingTop: "7%",
  },
  navButtons: {
    marginLeft: "70%",
    height: "50px",
  },
  projectButton: {
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
  const [selectedUsers, setSelectedUsers] = useState([]);

  console.log(window.location.search);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        setSelectedUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

          <Grid item sm={8}>
            {selectedUsers.map(function (selectedUser, index) {
              return (
                <div key={index}>
                  <InfoCard
                    fName={selectedUser.first_name}
                    lName={selectedUser.last_name}
                    school={selectedUser.school}
                    teacher={selectedUser.teacher_id}
                    contact={selectedUser.contact_number}
                    date={ new Date (selectedUser.date_of_birth).toDateString() }
                    email={selectedUser.email}

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
