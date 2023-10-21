import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillHeartFill
} from "react-icons/bs";

import {
  TbCopyrightOff
} from "react-icons/tb"; 

import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col className="made-by" lg={4} sm={6} xs={12}>
          <h6>
            Designed & Developed By Saurav Mishra
          </h6>
        </Col>
        {/* <Col className="social-media-icons" lg={4} sm={12} xs={12}>
          <Row>
            <Col lg={4} xs={4}>
              {" "}
              <a
                href="https://www.linkedin.com/in/saurav-mishra1710/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin color="#0e76a8" />
              </a>
            </Col>
            <Col lg={4} xs={4}>
              <a
                href="https://github.com/sauravmishra1710"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub color="#8a3ab9" />
              </a>
            </Col>
            <Col lg={4} xs={4}>
              <a
                href="mailto:saurav.mishra@live.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillEnvelopeFill color="#BB001B" />
              </a>
            </Col>
          </Row>
        </Col> */}
        <Col className="copyright" lg={8} sm={6} xs={12}>
        <h6>
          <TbCopyrightOff style={{ marginBottom: "2px" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Copyright issues | Feel free to fork | Let's Learn Together
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
