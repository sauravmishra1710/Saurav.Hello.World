import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Techstack from "./TechStack.js";
import Toolstack from "./ToolStack.js";
import ThemeContext from "../../utility/themeContext";
import skillsLogo from "../../img/page_logos/projects.jpg";

function Skills() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Container fluid>
        <div>
          <Row>
            <Col md={6}>
              <div
                class="col-lg-10"
                style={{ marginTop: "60px", marginLeft: "50px" }}
              >
                <h2 id="skillHeading" className="purple">Technical Skillset</h2>
                <div class="skills-text">
                  <p>
                    Professionally, I have been lucky to get the chance to work
                    on both sides of the front-end application development. The
                    windows desktop applications as well as the Web applications
                    off late. In this journey, for developing desktop
                    applications I started with VB .Net, migrating to C# .Net
                    and also diving into VC++ when needed. Having spent a
                    majority of my profesional journey with C# .Net I felt the
                    need to learn something new which has put me in the next
                    phase to explore the Ocean of Web applications. And what
                    better that starting to react with React. This new phase has
                    been exciting and enthusiastic to learn something new. Not
                    only react, but you get to know HTML, Javascript, & Css
                    along with it and that makes things more interesting.
                  </p>
                  <p></p>
                  <p>
                    On a personal front, the curiosity to expand my skillset, I
                    have been doing a few light python front-end stuffs using
                    PySimpleGUI. I have a great affinity for deep learning and
                    computer vision in the healthcare domain. The world of
                    Artificial Intelligence is evolving faster that ever with
                    cutting-edge development across the globe. I make it a point
                    to keep pace with the innovations in AI and computer vision
                    space within the healthcare domain.
                  </p>
                  <p></p>
                  <p>
                    A glimpse of my work with AI and python stuffs is listed in
                    the Projects page.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div class="col-lg-6 connect-image">
                <img
                  class="images"
                  src={skillsLogo}
                  alt=""
                  height={600}
                  width={800}
                />
              </div>
            </Col>
          </Row>
        </div>

        <Techstack />
        <Toolstack />
      </Container>
    </>
  );
}

export default Skills;
