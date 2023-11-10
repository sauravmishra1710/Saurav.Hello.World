import React, { useContext } from "react";
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

function Techstack() {
    return (
      <div
        className="skills-parent"
        id="skillsSection"
      >
        <h2 id="skillHeading">Technical Skillset</h2>
        
        <div className="skills-card">
          <CardSkill
            text="Javascript"
            icon= {< DiJavascript1 />}
          />
          
        </div>
      </div>
    );
  }
  
  export default Techstack;