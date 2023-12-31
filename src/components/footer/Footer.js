import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { TbCopyrightOff } from "react-icons/tb";

import "./footer.css";
import "../../utility/scrollToTopButtonComponent/scrollToTopButton.css";

import { Icon } from "@iconify/react";
import scrollToTopButton from "../../utility/scrollToTopButtonComponent/scrollToTopButton.js";

function toTopEvent() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Footer() {
  return (
    <Container fluid className="footer">
      <button onClick={toTopEvent} id="scrollToTopBtn" title="Scroll to top">
        <Icon
          icon="clarity:cursor-hand-solid"
          color="#c770f0"
          width="54"
          height="54"
        />
      </button>
      {/* <scrollToTopButton /> */}
      <Row className="footer-row">
        <Col className="made-by" lg={4} sm={12} xs={12}>
          <h6>Designed & Developed By Saurav Mishra</h6>
        </Col>
        <Col className="footer-body" lg={4} sm={12} xs={12}>
          <div className="social-media-icons">
            <a
              href="https://github.com/sauravmishra1710"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-mishra1710/"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=t1GX3O8AAAAJ"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGooglescholar />
            </a>
            <a
              href="https://twitter.com/forevrManUtd"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com/saurav.mishra1710/"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.instagram.com/flashyfilters.saurav1710/"
              style={{ color: "#243123", marginRight: "10px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </Col>
        <Col className="copyright" lg={4} sm={12} xs={12}>
          <h6>
            <TbCopyrightOff style={{ marginBottom: "2px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Copyright issues | Let's Learn
            Together
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
