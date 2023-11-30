import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Bounce, Fade} from "react-reveal";
import Techstack from "./TechStack.js";
import Toolstack from "./ToolStack.js";
import CertificationStack from "./CertificationStack.js";
import ThemeContext from "../../utility/themeContext";
import skillsLogo from "../../img/page_logos/programmers_02.png";

function Skills() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Container fluid>
        <div>
          <Row>
            <Col md={6}>
              <div
                className="col-lg-10"
                style={{ marginTop: "60px", marginLeft: "50px" }}
              >
                <Fade bottom duration={1000} distance="100px">
                  <h2 id="heading" className="purple">
                    Technical Skillset
                  </h2>
                </Fade>
                <div className="skills-text">
                  <Bounce right duration={1000}>
                    <p>
                      Professionally, I have been lucky to get the chance for
                      working on both sides of the front-end application
                      development. The
                      <span className="purple">
                        <b> Windows Desktop Applications</b>
                      </span>{" "}
                      as well as the{" "}
                      <span className="purple">
                        <b> Web Applications</b>
                      </span>
                      . I started with{" "}
                      <span className="purple">
                        <b>VB .Net</b>
                      </span>
                      , migrating to{" "}
                      <span className="purple">
                        <b>C# .Net</b>
                      </span>{" "}
                      and also diving into VC++ when needed. Having spent the
                      majority of my profesional journey with C# .Net, I needed
                      to explore something new which has put me in my path to
                      explore the{" "}
                      <span className="purple">
                        <b>Ocean of Web</b>
                      </span>{" "}
                      applications. And nothing better that starting to react
                      with React. This new phase has been exciting and
                      enthusiastic to learn the web technologies. Not only
                      React, but you get to know HTML, Javascript, CSS, & other
                      learnings the web world has to offer and that makes things
                      more interesting.
                    </p>
                  </Bounce>
                  <p></p>
                  <Bounce left duration={1000}>
                    <p>
                      On the personal front, the curiosity to expand my
                      skillset, I have been doing a few light-weight python
                      front-end stuffs using{" "}
                      <a
                        href="https://www.pysimplegui.org/en/latest/"
                        target="_blank"
                      >
                        <span className="purple">
                          <b>PySimpleGUI</b>
                        </span>
                      </a>
                      . I have a great affinity for{" "}
                      <span className="purple">
                        <b>
                          deep learning and computer vision in the healthcare
                          domain
                        </b>
                      </span>
                      . The world of Artificial Intelligence is evolving faster
                      than ever with cutting-edge development across the globe.
                      I make it a point to keep pace with the innovations in AI
                      and computer vision space within the healthcare domain.
                    </p>
                  </Bounce>
                  <p></p>
                  <Bounce right duration={1000}>
                    <p>
                      A glimpse of my work with AI and python stuffs is listed
                      in the Projects page.
                    </p>
                  </Bounce>
                </div>
              </div>
            </Col>
            <Col md={6}>
            <Fade top duration={1000} distance="500px">
              <div className="col-lg-6 connect-image">
                <img
                  className="images"
                  src={skillsLogo}
                  alt=""
                  height={600}
                  width={800}
                />
              </div>
              </Fade>
            </Col>
          </Row>

          <Techstack />
          <Toolstack />
          <CertificationStack />
        </div>
      </Container>
    </>
  );
}

export default Skills;
