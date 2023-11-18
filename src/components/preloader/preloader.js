import React from "react";
import "./preloader.css";
import developer from "../../img/page_logos/developer_pre_loader.svg";

function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"}></div>
    </>
  );
}

export default Preloader;
