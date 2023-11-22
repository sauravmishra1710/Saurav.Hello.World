import React from "react";
import { IconContext } from "react-icons";
import { Fade } from "react-reveal";
import "./cardSkill.css";

const CardSkill = ({ text, icon }) => {
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="cardSkill-container">
        <IconContext.Provider value={{ size: "8em", color: "#7770F0" }}>
          <div>{icon}</div>
        </IconContext.Provider>
      </div>
    </Fade>
  );
};

export default CardSkill;
