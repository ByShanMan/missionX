import React from "react";
import { Button } from "@material-ui/core";

import "../projects-page-componentsCSS/cardDifficulty.css";

function CardDifficulty() {
  return (
    <div className="cardLevelButtons">
      <Button
        className="levelButtons"
        style={{
          minWidth: "120px",
          backgroundColor: "dodgerBlue",
          color: "white",
          padding: "1px",
        }}
        size="small"
        variant="contained"
      >
        BEGINNER
      </Button>
      <Button
        className="levelButtons"
        style={{ minWidth: "120px", padding: "1px" }}
        size="small"
        variant="contained"
      >
        INTERMEDIATE
      </Button>
      <Button
        className="levelButtons"
        style={{ minWidth: "120px", padding: "1px" }}
        size="small"
        variant="contained"
      >
        ADVANCED
      </Button>
    </div>
  );
}

export default CardDifficulty;
