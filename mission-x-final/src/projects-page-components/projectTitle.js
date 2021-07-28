import React from "react";

import "../projects-page-componentsCSS/projectTitle.css";

export default function projectTitle() {
  return (
    <div className="projectTitle">
      <h1>PROJECTS</h1>
      <p className="subtitle">
        Welcome to the Project Library. You can use the filters on the left to
        search for specific projects.
      </p>
    </div>
  );
}
