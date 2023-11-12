import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./skills.css";
import CardSkill from "./cardSkill";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di"; 

import {
  IoLogoCss3
} from "react-icons/io";

import {
  SiVisualbasic,
  SiDotnet,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiOpencv,
} from "react-icons/si";

import {
  TbBrandCSharp
} from "react-icons/tb";

import {
  GiTurtle
} from "react-icons/gi";

function Techstack() {
    return (
      <Row>
          <div className="skills-parent" id="skillsSection">
            <h2 id="skillHeading">Languages & Frameworks...</h2>
              <div className="all-skills-container">
                  <div className="skills-card">
                    <CardSkill
                      text="C#"
                      icon= {< TbBrandCSharp />}
                    />      
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Visual Basic"
                      icon= {< SiVisualbasic />}
                    />      
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text=".Net"
                      icon= {< SiDotnet />}
                    />      
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Python"
                      icon= {< DiPython />}
                    />      
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="React"
                      icon= {< DiReact />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Javascript"
                      icon= {< DiJavascript1 />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Tensorflow"
                      icon= {< SiTensorflow />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Open CV"
                      icon= {< SiOpencv />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Numpy"
                      icon= {< SiNumpy />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Pandas"
                      icon= {< SiPandas />}
                    />
                  </div>
                  <div className="skills-card">
                    <CardSkill
                      text="Plotly"
                      icon= {< SiPlotly />}
                    />
                  </div>
                </div>
          </div>
      </Row>
    );
  }
  
  export default Techstack;