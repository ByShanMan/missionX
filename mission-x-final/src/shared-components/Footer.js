import React from "react";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import "../shared-componentsCSS/footer.css"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#b2e4fa",
  },
  footerGrid: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "7%",

    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  footTitle: {
    display: "flex",
    width: "250px",
    marginBottom: "2em",
    color: "rgb(112,112,112)",
  },
  footColumn: {
    width: "auto",
    color: "rgb(112,112,112)",
  },
  levelUpColumn: {
    width: "500px",
    color: "rgb(112,112,112)",
  },
});

export default function Footer() {
  const styles = useStyles();

  return (
    <div className="footMainContain">
      <Container className={styles.root} maxWidth={"xl"}>
        <Grid className={styles.footerGrid} container spacing={1}>
          <Grid item xs={2}>
            <Typography variant={"h5"} className={styles.footTitle}>
              COMPANY
            </Typography>
            <Typography variant={"subtitle1"} className={styles.footColumn}>
              About Us <br />
              Careers <br />
              Partners <br />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"h5"} className={styles.footTitle}>
              COURSES
            </Typography>
            <Typography variant={"subtitle1"} className={styles.footColumn}>
              Register <br />
              Login <br />
              Projects <br />
              Teachers <br />
              Parents <br />
              Resources <br />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"h5"} className={styles.footTitle}>
              SUPPORT
            </Typography>
            <Typography variant={"subtitle1"} className={styles.footColumn}>
              FAQs <br />
              Helpdesk <br />
              Contact Us <br />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"h5"} className={styles.footTitle}>
              LEGAL
            </Typography>
            <Typography variant={"subtitle1"} className={styles.footColumn}>
              Terms & Conditions <br />
              Privacy Policy <br />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant={"h5"} className={styles.footTitle}>
              LevelUp Works
            </Typography>
            <Typography variant={"subtitle1"} className={styles.levelUpColumn}>
              LevelUp Works is an Auckland-based enterprise dedicated to
              developing game-based learning software to help teachers in
              response to the New Zealand Digital Technologies & Hangarau
              Matihiko. alan@levelupworks.com
              <br />
              (021) 668 1852
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
