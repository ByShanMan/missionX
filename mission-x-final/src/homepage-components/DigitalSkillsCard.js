import React from "react";

import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

export default function DigitalSkillsCard(props) {
  const styles = useStyles();

  return (
    <Container>
      <Card>
        <CardContent className={styles.cardLayout}>
          <img
            className={styles.backgroundImg}
            src={props.backImage}
            alt="background image"
          />
          <img
            className={styles.overlay}
            src={props.overlayImage}
            alt="overlay image"
          />
          <p className={styles.subtitle1}>{props.subtitle1}</p>
          <br />
          <p className={styles.subtitle2}>{props.subtitle2}</p>
        </CardContent>
      </Card>
    </Container>
  );
}
