import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import logo from "../../img/Sm_logo.svg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSend,
} from "react-icons/ai";

import { GiSkills } from "react-icons/gi";

import { IoShareSocialSharp } from "react-icons/io5";

import { BsJournalBookmarkFill } from "react-icons/bs";

import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <div style={{display:"flex"}}>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about_me"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/my_projects"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/skills_and_certifications"
                  onClick={() => updateExpanded(false)}
                >
                  <GiSkills style={{ marginBottom: "2px" }} /> Skills &
                  Certifications
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/books_and_publications"
                  onClick={() => updateExpanded(false)}
                >
                  <BsJournalBookmarkFill style={{ marginBottom: "2px" }} />{" "}
                  Books & Publications
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/socials"
                  onClick={() => updateExpanded(false)}
                >
                  <IoShareSocialSharp style={{ marginBottom: "2px" }} /> Socials
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/Contact"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineSend style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/sauravmishra1710/Saurav.Hello.World"
                target="_blank"
                className="fork-btn-inner"
                style= {{ marginTop: "3px", height: "35px", background: "transparent", color:"#243123", border: "none"}}> 
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
