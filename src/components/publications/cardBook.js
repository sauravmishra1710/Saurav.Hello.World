import React from "react";
import "./cardBook.css";
import { Fade } from "react-reveal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

const popover = (tooltip_blurb_text) => (
  // <div style={{ display: "block", width: "1500px", padding: 30 }}>
    <Popover
      id="popover-basic"
      style={{ width: "1500px", wordBreak: "break-all" }}
    >
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>{tooltip_blurb_text}</Popover.Body>
    </Popover>
  // </div>
);

const renderTooltip = (tooltip_blurb_text) => (
  // <div style={{ width: 1500, padding: 30 }}>
    <Tooltip className="tooltip-inner"
      id="card-tooltip"
      style={{ width: "1500px", wordBreak: "break-all" }}
    >
      {tooltip_blurb_text}
    </Tooltip>
  // </div>
);

const CardBook = ({
  book_cover,
  good_read_link,
  tooltip_blurb_text = "",
  animationType,
}) => {
  if (animationType === "top") {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(tooltip_blurb_text)}
        fallbackPlacements={['right', 'left']}
      >
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
      </OverlayTrigger>
    );
  }

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={popover(tooltip_blurb_text)}
    >
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
    </OverlayTrigger>
  );
};

export default CardBook;
