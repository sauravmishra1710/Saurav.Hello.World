import React from "react";
import { Row } from "react-bootstrap";
import "./skills.css";
import CardSkill from "./cardSkill";
import { Icon } from "@iconify/react";
import pysimplegui from "../../img/pysimplegui.png"

function Techstack() {
  return (
    <Row>
      <div className="skills-parent" id="skillsSection">
        <h2 id="heading" className="purple">Languages & Frameworks...</h2>
        <div className="all-skills-container">
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="devicon:csharp" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="skill-icons:dotnet" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:python-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <div className="cardSkill-container">
              <img src={pysimplegui} alt="" height={190} width={190} />
            </div>
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:react-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="logos:nodejs" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="skill-icons:javascript" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="logos:html-5" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="logos:css-3" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="devicon:tensorflow-wordmark"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:opencv-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:numpy-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:pandas-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:plotly-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="devicon:matplotlib-wordmark"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Techstack;
