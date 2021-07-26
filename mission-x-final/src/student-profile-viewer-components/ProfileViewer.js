import React, { useState, useEffect } from "react";

import Header from "../shared-components/header";
import AvatarCard from "./avatarCard";
import InfoCard from "./infoCard";
import Footer from "../shared-components/footer";

import "../student-profile-viewer-componentsCSS/projectViewer.css";

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
    marginLeft: "60%",
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
  const [selectedStudents, setSelectedStudents] = useState([]);

  console.log(window.location.search);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile-viewer/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        setSelectedStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projectView">
      <Header />
      <Container maxWidth="xl" className={styles.root}>
        <Grid container spacing={12} className={styles.mainGrid}>
          <Grid item xs={4}>
            {selectedStudents.map(function (selectedStudent, index) {
              return (
                <div key={index}>
                  <AvatarCard avatarPicture={selectedStudent.profile_pic} />
                </div>
              );
            })}
          </Grid>
          <Grid item sm={8}>
            {selectedStudents.map(function (selectedStudent, index) {
              return (
                <div key={index}>
                  <InfoCard
                    fName={selectedStudent.first_name}
                    lName={selectedStudent.last_name}
                    school={selectedStudent.school}
                    teacher={selectedStudent.teacher_id}
                    contact={selectedStudent.contact_number}
                    date={ new Date (selectedStudent.date_of_birth).toUTCString() }
                    email={selectedStudent.email}

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
        </div>
      </Container>
      <Footer />
    </div>
  );
}
