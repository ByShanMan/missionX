import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:4000/student-profiles")
      .then((response) => {
        setStudentProfiles(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    history.push("/profile-viewer/" + id);
  };

  return (
    <div className="studentProfileMain">
      {studentProfiles.map((studentProfile) => (
        <div
          onClick={() => handleClick(studentProfile.user_id)}
          className="studentProfileCard"
        >
          {studentProfiles.profile_pic}
          <div className="studentProfileName">
            <p>
              {studentProfiles.first_name} {studentProfiles.last_name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
