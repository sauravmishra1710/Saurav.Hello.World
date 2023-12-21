import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import  { SiGooglescholar } from "react-icons/si"
import {
  TbCopyrightOff
} from "react-icons/tb"; 

import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col className="made-by" lg={4} sm={12} xs={12}>
          <h6>
            Designed & Developed By Saurav Mishra
          </h6>
        </Col>
        <Col className="footer-body" lg={4} sm={12} xs={12}>
          <div className='social-media-icons'>
              <a
                href="https://github.com/sauravmishra1710"
                style={{ color: '#243123', marginRight:'10px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saurav-mishra1710/"
                style={{ color: '#243123', marginRight:'10px'}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=t1GX3O8AAAAJ"
                style={{ color: '#243123', marginRight:'10px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGooglescholar />
              </a>
              <a
                href="https://twitter.com/forevrManUtd"
                style={{ color: '#243123', marginRight:'10px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.instagram.com/saurav.mishra1710/"
                style={{ color: '#243123', marginRight:'10px' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.instagram.com/flashyfilters.saurav1710/"
                style={{ color: '#243123', marginRight:'10px' }}
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Copyright issues | Let's Learn Together
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
