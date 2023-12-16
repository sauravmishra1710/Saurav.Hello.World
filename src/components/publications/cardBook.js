import React from "react";
import "./cardBook.css";
import { Fade } from "react-reveal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

const renderPopover = (tooltip_header, tooltip_blurb_text) => (
  <Popover
    className="popover-inner"
    id="popover-basic"
    style={{ width: "700px", wordBreak: "break-all", backgroundColor:"black"}}
  >
    <Popover.Header as="h3">{tooltip_header}</Popover.Header>
    <Popover.Body style={{color: "white" }}>{tooltip_blurb_text}</Popover.Body>
  </Popover>
);

const renderTooltip = (tooltip_blurb_text) => (
  <Tooltip
    className="tooltip-inner"
    id="card-tooltip"
    style={{ width: "700px", wordBreak: "break-all" }}
  >
    {tooltip_blurb_text}
  </Tooltip>
);

const CardBook = ({
  book_title,
  book_author,
  book_cover,
  good_read_link,
  blurb_text = "",
  animationType,
}) => {
  if (animationType === "top") {
    return (
      <OverlayTrigger
        placement="auto"
        delay={{ show: 250, hide: 400 }}
        overlay={renderPopover(book_title + " by " + book_author, blurb_text)}
        fallbackPlacements={["right", "left"]}
      >
        <div className="master-container">
          <Fade top duration={1000} distance="50px">
            <div className="cardBook-container">
              <a href={good_read_link} target="_blank" rel="noreferrer">
                <img src={book_cover} alt="" height={250} width={200} />
              </a>
            </div>
          </Fade>
        </div>
      </OverlayTrigger>
    );
  }

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderPopover(book_title + " by " + book_author, blurb_text)}
    >
      <div className="master-container">
        <Fade bottom duration={1000} distance="50px">
          <div className="cardBook-container">
            <a href={good_read_link} target="_blank" rel="noreferrer">
              <img src={book_cover} alt="" height={250} width={200} />
            </a>
          </div>
        </Fade>
      </div>
    </OverlayTrigger>
  );
};

export default CardBook;
