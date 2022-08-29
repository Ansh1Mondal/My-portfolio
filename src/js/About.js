import React from "react";
import "../css/About.css";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="header">
        <h1 className="heading">About Me</h1>
        <div>
          <h2 className="subhead">
            I am Ansh Mondal a <span>Web Developer.</span>
          </h2>
        </div>
        <div>
          <p className="AbtPara">
            I am currently pursuing Btech and I also have an experience of web
            development of about 2-3 years . I have done Game development as
            well and also made few projects. I love to design web pages as a
            Frontend Web Developer. I have also one of the organizers of the
            hackathon named HackMoreish organised on may 2022.
          </p>
        </div>
      </div>
      <div className="info">
        <div className="Pinfo1">
          <p>
            <span>Birthday:</span> 1st October 2001
          </p>
          <p>
            <span>Website:</span>{" "}
            <a href="https://anshmondal.netlify.app/" target="_blank">
              anshmondal.netlify.app
            </a>
          </p>
          <p>
            <span>Degree:</span> BTech CSE
          </p>
          <p>
            <span>City:</span> Delhi
          </p>
        </div>
        <div className="Pinfo2">
          <p>
            <span>Age:</span> 21
          </p>
          <p>
            <span>Email:</span> ansh1mondal@gmail.com
          </p>
          <p>
            <span>Mobile:</span> 9654283574
          </p>
          <p>
            <span>Freelance:</span> Available
          </p>
        </div>
        <div className="bars">
          <h3>Html</h3>
          <div className="one">
            <div className="one-one">
              <span>90%</span>
            </div>
          </div>
          <h3>CSS</h3>
          <div className="one">
            <div className="one-two">
              <span>85%</span>
            </div>
          </div>
          <h3>JS</h3>
          <div className="one">
            <div className="one-three">
              <span>70%</span>
            </div>
          </div>
          <h3>C++</h3>
          <div className="one">
            <div className="one-four">
              <span>80%</span>
            </div>
          </div>
        </div>
        <div className="btns">
          <a href="Ansh.pdf" download="Ansh.pdf">
            <Button className="btn1">Download CV</Button>
          </a>
          <Button
            className="btn1"
            onClick={() => {
              document.getElementById("Contact").scrollIntoView();
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
}
