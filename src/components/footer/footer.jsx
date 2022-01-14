import React from "react";
import "./footer.css";

const footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="pad-left-right">
      <div className="footer-wrapper">
        <a href="https://www.roguescollective.com" target="_blank">
          <div className="svg-container"></div>
          Copyright: The Rogues Collective, {year}
        </a>
      </div>
    </div>
  );
};

export default footer;
