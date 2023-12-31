import React from "react";
import "./scrollToTopButton.css";

function toTopEvent() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollFunction() {
  // Show the button only once the user scrolls down 20px.
  const topBtn = document.getElementById("scrollToTopBtn");
  const docElement = document.documentElement;
  if (topBtn) {
    if (document.body.scrollTop > 20 || docElement.scrollTop > 20) {
      topBtn.style.visibility = "visible";
    } else {
      topBtn.style.visibility = "hidden";
    }
  }
}

window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  scrollFunction();
};

export default function scrollToTopButton() {
  return (
    <button onClick={toTopEvent} id="scrollToTopBtn" title="Scroll to top">
      <Icon
        icon="clarity:cursor-hand-solid"
        color="#c770f0"
        width="72"
        height="72"
      />
    </button>
  );
}
