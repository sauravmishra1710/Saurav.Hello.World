import React from "react";
import { IconContext } from "react-icons";
import "./cardSkill.css";

const CardSkill = ({text, icon }) => {
  return (
    <div className="cardSkill-container">
      {/* <div style={{ position: "absolute" }}>
        <p style={{ color: "black", FontFace: "monospace" }}>{text}</p>
      </div> */}
    
      <IconContext.Provider value={{ size: "8em", color: "#7770F0"}}>
        <div>
          {icon}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default CardSkill;


