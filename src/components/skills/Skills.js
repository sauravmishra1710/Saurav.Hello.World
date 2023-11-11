import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Techstack from "./TechStack.js";
import Toolstack from "./ToolStack.js"
import ThemeContext from "../../utility/themeContext";
import skillsLogo from "../../img/page_logos/skills.png"

function Skills() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <div style={{backgroundColor: "#EDF9FE"}}>
      <Row>
        <Col md={6}>
        <div class="col-lg-6" style={{marginTop: "60px", marginLeft: "50px"}}>
        <h2 id="skillHeading">Technical Skillset</h2>
            text
        </div>
        </Col>
        <Col md={6}>
        <div class="col-lg-6 connect-image">
            <img  class= "images" src={skillsLogo} alt="" height={600} width={800} />
        </div>
        </Col>
      </Row>
    </div>

      <Techstack  />
      <Toolstack />
    </>
  );
}

export default Skills;
