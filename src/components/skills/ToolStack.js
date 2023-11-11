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
  DiGit,
  DiJava,
} from "react-icons/di";

function Toolstack() {
    return (
      <Row> 
          <div
            className="skills-parent"
            id="skillsSection"
          >
            <h2 id="skillHeading">Process & Tools...</h2>
            <div style={{display: "flex"}}>
              <div className="skills-card">
                
                <CardSkill
                  text="Github"
                  icon= {< DiGit />}
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
                  text="Python"
                  icon= {< DiReact />}
                />      
              </div>
            </div>
          </div>
      </Row>
    );
  }
  
  export default Toolstack;
