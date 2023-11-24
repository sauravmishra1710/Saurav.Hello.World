import React from "react";
import "./card.css";
import Button from "react-bootstrap/Button";
import { Fade } from "react-reveal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Card = ({ title, srcLink, miscLink, description, miscDescription, image }) => {
  const styleBg = {
    flex: "4",
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  };
  return (
    <Fade bottom duration={2000} distance="20px">
    <div className="outer-div">
      <div className="inner-div">
        <div className="front">
          <div className="front-details">
            <div style={styleBg}></div>
            <div className="front-title">{title}</div>
          </div>
          <div className="front__text">
            <span className="front__text-hover">Hover to Read More</span>
          </div>
        </div>
        <div className="back">
          <div>
            {description.map((text) => (
              <div style={{marginTop:"5px"}}><p><strong>{text}</ strong></p></div>
            ))}
            <div className="projectCardBtn">
            {srcLink && (<Button variant="primary" href={srcLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub Repo"}
        </Button>)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {miscLink && (<Button variant="primary" href={miscLink} target="_blank">
          <CgWebsite /> &nbsp;
          {miscDescription}
        </Button>)}
        </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default Card;
