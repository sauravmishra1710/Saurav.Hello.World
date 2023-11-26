import React from "react";
import "./cardBook.css";
import { Bounce, Fade } from "react-reveal";
import threeMistakes from "../../img/books/3Mistakes.jpg";

const CardBook = ({}) => {
  return (
    <div className="master-container">
      <Bounce bottom duration={1000} distance="50px">
        <div className="cardBook-container">
          {/* <a
            href="https://github.com/sauravmishra1710"
            target="_blank"
            rel="noreferrer"
          > */}
            <img src={threeMistakes} alt="" height={250} width={200} />
          {/* </a> */}
        </div>
      </Bounce>
      {/* <div class="overlay"></div> */}
      {/* <div className="tooltip-card"> */}
        <div className="tooltip-box">
          <p>
            In late-2000, a young boy in Ahmedabad called Govind dreamt of
            having a business. To accomodate his friends Ish and Omi's passion,
            they open a cricket shop. Govind's wants to make money and thinks
            big. Ish is all about nurturing Ali, the batsman with a rare gift.
            Omi knows his limited capabiltiies and just wants to be with his
            friends. However, nothing comes easy in a turbulent city. To realize
            their goals, they will have to face it all - religious politics,
            earthquakes, riots, unacceptable love and above all, their own
            mistakes. Will they make it? Can an individual's dreams overcome the
            nightmares offered by real life?
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default CardBook;
