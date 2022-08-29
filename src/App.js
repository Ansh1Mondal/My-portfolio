import "./App.css";
import "./js/About";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import TypeAnimation from "react-type-animation";
// import { useState } from "react";
// import { Link } from "@mui/material";
// import Icon from "@mui/material/Icon";
// import PersonIcon from "@mui/icons-material/Person";

var name = "Ansh Mondal";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill-rule="evenodd"
        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
      />
      <path
        fill-rule="evenodd"
        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
      />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function WorkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function PortIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function ContactIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}

function App() {
  // const hamburger = document.querySelector(".hamburger");
  // // const navMenu = document.querySelector(".sections");

  // hamburger.addEventListener("Click", () => {
  //   hamburger.classList.toggle("active");
  //   // navMenu.classList.toggle("active");
  // });

  return (
    <div className="App">
      <div className="headPage" id="home">
        <div className="navbar">
          <div className="sections">
            {/* <div className="Headlogo">Logo</div> */}
            <ul>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("home").scrollIntoView();
                  }}
                >
                  <HomeIcon />
                  Home
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("about").scrollIntoView();
                  }}
                >
                  <UserIcon />
                  About
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  // onclick={document.getElementById("home").scrollIntoView()}
                  onClick={() => {
                    document.getElementById("mywork").scrollIntoView();
                  }}
                >
                  <WorkIcon />
                  Services
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  // onclick={document.getElementById("home").scrollIntoView()}
                  onClick={() => {
                    document.getElementById("Myport").scrollIntoView();
                  }}
                >
                  <PortIcon />
                  Portfolio
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("Contact").scrollIntoView();
                  }}
                >
                  <ContactIcon />
                  Contact Me
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar2">
          <div className="sections">
            {/* <div className="Headlogo">Logo</div> */}
            <ul>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("home").scrollIntoView();
                  }}
                >
                  <HomeIcon />
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("about").scrollIntoView();
                  }}
                >
                  <UserIcon />
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  // onclick={document.getElementById("home").scrollIntoView()}
                  onClick={() => {
                    document.getElementById("mywork").scrollIntoView();
                  }}
                >
                  <WorkIcon />
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  // onclick={document.getElementById("home").scrollIntoView()}
                  onClick={() => {
                    document.getElementById("Myport").scrollIntoView();
                  }}
                >
                  <PortIcon />
                </Button>
              </li>
              <li>
                <Button
                  color="secondary"
                  onClick={() => {
                    document.getElementById("Contact").scrollIntoView();
                  }}
                >
                  <ContactIcon />
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="coverInfo">
          <p className="heading1">
            Hello, My name is <span>{name}</span>.
          </p>
          <p className="skills">
            <TypeAnimation
              cursor={true}
              smooth={true}
              sequence={[
                "Frontend Web Developer",
                2000,
                "Web Designer",
                2000,
                "Proficient in C++",
                2000,
                "Game Developer",
                2000,
                "",
              ]}
              wrapper="h2"
              repeat={Infinity}
            />
          </p>
          <p className="para1">
            I am a Frontend web Developer and have an experience over 3 years.
            My Expertise is to create a visually good looking and fully
            functional frontend for a website.
          </p>
          <div className="moreAbt">
            <Button
              color="secondary"
              onClick={() => {
                document.getElementById("about").scrollIntoView();
              }}
            >
              More about Me
            </Button>
          </div>
        </div>
        <div className="Pic">
          <img src={require("./icons/Ansh.jpg")} alt="My pic" />
          <svg viewBox="0 0 100 100" className="brdr1">
            <path
              d="M25,2 L2,2 L2,25"
              fill="none"
              stroke="salmon"
              stroke-width="3"
            />
          </svg>
          <svg viewBox="0 0 100 100" className="brdr2">
            <path
              d="M75,98 L98,98 L98,75"
              fill="none"
              stroke="salmon"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
