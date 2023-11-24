import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import "../../App.css";
import ThemeContext from "../../utility/themeContext";
import Typewriter from "typewriter-effect";
import { Bounce, Fade } from "react-reveal";
import programmer from "../../img/page_logos/programmer.png";
import me from "../../img/page_logos/me_light_mode_cartoonized.png";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  var app = document.getElementById("app");
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={5}>
            <div className="home">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Bounce top duration={1000}>
                  <div className="col-lg-6">
                    <img
                      className="images"
                      src={me}
                      alt=""
                      height={300}
                      width={300}
                    />
                  </div>
                </Bounce>
                <div className="parallax purple">
                <Fade left duration={1000}>
                  <h1 className="hithere">
                      Hi There!{" "}
                      <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                      </span>
                      </h1>
                    </Fade>
                    <h1 className="hithere">
                    <Fade right duration={1000}>
                      I'm Saurav
                    </Fade>
                  </h1>

                  <Fade right duration={1000}>
                    <div className="parallax-text purple">
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 50,
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">Welcome to My Space - Saurav.Hello.World!<br></span>'
                            )
                            .pauseFor(200);
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">Software/Frontend Developer<br></span>'
                            )
                            .pauseFor(200);
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">Learn & Code Everyday<br></span>'
                            )
                            .pauseFor(200);
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">AI, Computer Vision for Medicine & Healthcare<br></span>'
                            )
                            .pauseFor(200);
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">Enthusiast Photographer<br></span>'
                            )
                            .pauseFor(200);
                          typewriter
                            .typeString(
                              '<span style="font-size:20.0pt">Chef @ Home <br></span>'
                            )
                            .pauseFor(200)
                            .typeString(
                              '<span style="color: red; font-size:20.0pt;">Manchester United</span><span style=font-size:20.0pt;"> Fan Boy</span></strong>'
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Bounce right duration={1000}>
              <div className="col-lg-6">
                <img
                  className="homeimages"
                  src={programmer}
                  alt=""
                  height={700}
                  width={1000}
                />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
