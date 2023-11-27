import React from "react";
import "./cardBook.css";
import { Fade } from "react-reveal";

const CardBook = ({
  book_cover,
  good_read_link,
  tooltip_blurb_text="",
  animationType,
}) => {
  if (animationType === "top") {
    return (
      <div className="master-container">
        <Fade top duration={1000} distance="50px">
          <div className="cardBook-container">
            <a href={good_read_link} target="_blank" rel="noreferrer">
              <img src={book_cover} alt="" height={250} width={200} />
            </a>
          </div>
        </Fade>
        {/* <div className="tooltip-box">
          <p>{tooltip_blurb_text}</p>
        </div> */}
      </div>
    );
  }

  return (
    <div className="master-container">
      <Fade bottom duration={1000} distance="50px">
        <div className="cardBook-container">
          <a href={good_read_link} target="_blank" rel="noreferrer">
            <img src={book_cover} alt="" height={250} width={200} />
          </a>
        </div>
      </Fade>
      {/* <div className="tooltip-box">{tooltip_blurb_text}</div> */}
    </div>
  );
};

export default CardBook;
