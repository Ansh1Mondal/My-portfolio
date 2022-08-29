import React from "react";
import "../css/Mywork.css";

export default function Mywork() {
  return (
    <div className="container">
      <div className="myWork" id="mywork">
        <h1 className="heading1">Services</h1>
        <div className="service-cards">
          <div className="cards">
            <div className="card-icon">
              <img src={require("../icons/web-design.png")} alt="pic" />
            </div>
            <div className="card-info">
              <h2>I am a web designer</h2>
              <p>
                I have more than 2 years of experience in web designing and
                worked on many of my personal projects. Below are some of my
                work samples related to my skills.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-icon">
              <img src={require("../icons/coding.png")} alt="pic" />
            </div>
            <div className="card-info">
              <h2>I am a web developer</h2>
              <p>
                I have more than 2 years of experience in web development and
                worked on many of my personal projects. Below are some of my
                work samples related to my skills.
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card-icon">
              <img src={require("../icons/mobile-development.png")} alt="pic" />
            </div>
            <div className="card-info">
              <h2>I am a android developer</h2>
              <p>
                I have more than 1 year of experience in android development and
                worked on many of my personal projects. Below are some of my
                work samples related to my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="long-card">
            <h3>
              These are some of the services that I can provide to the recruiter
              of the Company with my full determination and hardwork. I can work
              hard to enhance the relation with the others. As I want to gain a
              professional experience and also want to know how a particular
              firm works.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
