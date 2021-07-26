import React from "react";

import Container from "@material-ui/core/Container";

import "../shared-componentsCSS/header.css";

export default function Header() {
  [loggedInUsers, setLoggedInUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile-viewer/" + window.location.search)
      .then((response) => {
        console.log(response.data);
        setLoggedInUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="header">
      <Container maxWidth="xl">
        <div className="headerBody">
          <div className="logo">
            <img
              className="logoPic"
              src="/mission-x-images/shared-images/logoWorks.png"
              alt="level up logo"
            />
          </div>
          <div className="middleButtons">
            <p>HOME</p>
            <p>FEATURES</p>
            <p>TEACHERS</p>
          </div>
          <div className="rightEdgeStuff">
            <div className="flags">
              <div className="lang">LANG</div>
              <img
                src="/mission-x-images/shared-images/NZFlag.png"
                alt="nz flag"
              />
              <img
                src="/mission-x-images/shared-images/MaoriFlag.png"
                alt="maori flag"
              />
            </div>
            <div className="loginContainer">
              <div className="avatar">
                {loggedInUsers.map(function (loggedInUser, index) {
                  return <div key={index}>{loggedInUser.profile_pic}</div>;
                })}
              </div>
              <div className="loginButtons">
                <p>
                  {loggedInUsers.map(function (loggedInUser, index) {
                    return (
                      <div key={index}>
                        <p>
                          {loggedInUser.first_name} {loggedInUser.last_name}
                        </p>
                      </div>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
