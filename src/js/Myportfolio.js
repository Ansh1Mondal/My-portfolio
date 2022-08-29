import React from "react";
import "../css/Myportfolio.css";
import { Button } from "@mui/material";

export default function Myportfolio() {
  let rock = "https://rockspapersscissor.netlify.app";
  let calc = "https://ansh1mondal.github.io/Calculator/";
  let quiz = "https://quizappproject.netlify.app";
  let weather = "https://allweatherapp.netlify.app/";
  let theBoy =
    "https://drive.google.com/file/d/1VPokhUk4IZMcop5SAOuneq6j25lmzc5t/view?usp=sharing";
  return (
    <div className="Myport" id="Myport">
      <div className="Myport-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="Myport-body">
        <div className="Myport-body-heading">
          <h1>My Projects:</h1>
        </div>
        <div className="Myport-body-works">
          <div className="myport-works">
            <a href={calc} target="_blank" rel="noopener noreferrer">
              <Button className="work-btns">
                <img src={require("../icons/calculator.png")} alt="pic" />
              </Button>
            </a>
          </div>
          <div className="myport-works">
            <a href={rock} target="_blank" rel="noopener noreferrer">
              <Button className="work-btns">
                <img src={require("../icons/rock.png")} alt="pic" />
              </Button>
            </a>
          </div>
          <div className="myport-works">
            <a href={quiz} target="_blank" rel="noopener noreferrer">
              <Button className="work-btns">
                <img src={require("../icons/quiz.png")} alt="pic" />
              </Button>
            </a>
          </div>
          <div className="myport-works">
            <a href={weather} target="_blank" rel="noopener noreferrer">
              <Button className="work-btns">
                <img src={require("../icons/weather.png")} alt="pic" />
              </Button>
            </a>
          </div>
          <div className="myport-works">
            <a href={theBoy} target="_blank" rel="noopener noreferrer">
              <Button className="work-btns">
                <img src={require("../icons/theBoy.png")} alt="pic" />
              </Button>
            </a>
          </div>
          <div className="myport-works">to be filled soon</div>
          <div className="myport-works">to be filled soon</div>
          <div className="myport-works">to be filled soon</div>
          <div className="myport-works">to be filled soon</div>
        </div>
      </div>
    </div>
  );
}
