import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery1 from "./ImageGallery1";
import ImageGallery2 from "./ImageGallery2";
import CullinaryImageGallery from "./CullinaryImageGallery";



const Socials = () => {
  return (
    <>
    <div>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            //   paddingRight: "50px",
            }}
          >
              <div>
                <h1 style={{ fontSize: "2.1em", paddingTop: "50px" }}>
                Image Gallery 1
                </h1>
                <ImageGallery1 />
                </div>
          </Col>
          
          {/* <Col
            md={5}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
            //   paddingLeft: "50px",
            }}
          >
            <div>
                <h1 style={{ fontSize: "2.1em", paddingTop: "50px" }}>
                Image Gallery 2</h1>
                <ImageGallery1 />
            </div>
          </Col> */}
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
            //   paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "50px" }}>
              Image Gallery 2
            </h1>
            <ImageGallery2 />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
            //   paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "50px" }}>
              My Cullinary Space
            </h1>
            <CullinaryImageGallery />
          </Col>
        </Row>
        </div>
        {/* <div className="home">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="parallax">
            <h1 className="hithere">
            Hi There!
            <br/>Socials Page</h1>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Socials;
