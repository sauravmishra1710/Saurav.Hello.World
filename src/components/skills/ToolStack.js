import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./skills.css";
import CardSkill from "./cardSkill";
import { Icon } from "@iconify/react";

function Toolstack() {
  return (
    <Row>
      <div className="skills-parent" id="skillsSection">
        <h2 id="heading" className="purple">Process & Tools...</h2>
        <div className="all-skills-container">
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="devicon-plain:visualstudio-wordmark"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:vscode-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="devicon:anaconda-wordmark"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="devicon:jupyter-wordmark"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:github-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="file-icons:tortoisesvn" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="logos:jenkins" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={<Icon icon="logos:new-relic" width="112" height="112" />}
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:splunk-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:jira-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="academicons:mendeley-square"
                  width="112"
                  height="112"
                />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon icon="devicon:chrome-wordmark" width="112" height="112" />
              }
            />
          </div>
          <div className="skills-card">
            <CardSkill
              icon={
                <Icon
                  icon="vscode-icons:file-type-word"
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

export default Toolstack;
