import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Bounce } from "react-reveal";
import ImageGallery2 from "./MyPixelStories";
import CullinaryImageGallery from "./CullinaryImageGallery";
import MyPixelStories from "./NatureThruMyLens";
import "./socials.css";
import socialsPhotographer from "../../img/page_logos/socialsPhotographer.jpeg";

const Socials = () => {
  return (
    <>
      <div style={{marginBottom: "40px"}}>
        <Row style={{ margin: "100px 100px 10px 100px" }}>
          <Col md={9}>
            <h1 className="purple heading">My Stories from behind the Lens</h1>
            <div className="socials-text">
              <p>
                <span className="purple">
                  <b> Food</b>
                </span>
                ,{" "}
                <span className="purple">
                  <b> Travel</b>
                </span>
                , &{" "}
                <span className="purple">
                  <b> Photography</b>
                </span>{" "}
                for an important part of me. Like each place has its own story
                to tell, every plate of food has something to tell about it's
                origin & evolution. How it traveled around the world, getting
                modified to suit local flavours and taste buds before finally it
                comes to our plate. Both travel and food come together to create
                a lot of joy, memories, and togetherness.
              </p>
              <p>
                The following galleries give a glimpse into{" "}
                <span className="purple">
                  <b>my explorations with the travel, camera, and cooking</b>
                </span>
                . Navigate to the sections directly with the links below.
              </p>
            </div>
            <ul>
              <li>
                1.&nbsp;
                <a href="#section1">Seeing the world through a camera lens</a>
              </li>
              <li>
                2.&nbsp;
                <a href="#section2">Wanderlust Chronicles: A Collection of Travel Photos</a>
              </li>
              <li>
                3.&nbsp;
                <a href="#section3">Family, food, & fun - Happiness is Homemade</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <Bounce top duration={1000} distance="500px">
              <div>
                <img
                  src={socialsPhotographer}
                  alt=""
                  height={300}
                  width={350}
                />
              </div>
            </Bounce>
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", margin: "10px 100px 10px 100px" }}
        >
          <div>
            <span id="section1" style={{ color: "white", marginTop: "20px" }}>
              ...
            </span>
            <h1 className="purple heading">Seeing the world through a camera lens...</h1>
            <p style={{ fontSize: "10px", color: "red", fontWeight: "800" }}>
              <sup>*</sup>Click on the image or button below to start the
              lightbox mode.
            </p>
            <MyPixelStories />
          </div>
        </Row>

        <Row
          style={{ justifyContent: "center", margin: "10px 100px 10px 100px" }}
        >
          <div>
            <span id="section2" style={{ color: "white", marginTop: "20px" }}>
              ...
            </span>
            <h1 className="purple heading">Wanderlust Chronicles: A Collection of Travel Photos...</h1>
            <p style={{ fontSize: "10px", color: "red", fontWeight: "800" }}>
              <sup>*</sup>Click on the image or button below to start the
              lightbox mode.
            </p>
            <ImageGallery2 />
          </div>
        </Row>

        <Row
          style={{ justifyContent: "center", margin: "10px 100px 10px 100px" }}
        >
          <div>
            <span id="section3" style={{ color: "white", marginTop: "20px" }}>
              ...
            </span>
            <h1 className="purple heading">Family, food, & fun - Happiness is Homemade</h1>
            <p style={{ fontSize: "10px", color: "red", fontWeight: "800" }}>
              <sup>*</sup>Click on the image or button below to start the
              lightbox mode.
            </p>
            <CullinaryImageGallery />
          </div>
        </Row>
      </div>
    </>
  );
};

export default Socials;
