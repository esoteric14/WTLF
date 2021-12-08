import React, { useState, useEffect } from "react";
import forehead from "../../assets/head.png";
import chin from "../../assets/chin.png";
import painting from "../../assets/painting.png";
import "./whotlf.css";
import Fade from "react-reveal/Fade";
import { Div } from "./whotlf.styled";

const Whotlf = () => {
  const [reveal, setReveal] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    scrollPercent = Math.round(scrollPercent * 100);
    console.log(scrollPercent);
    setScrollPos(scrollPercent);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollPos > 50) {
      setReveal(true);
    } else {
      setReveal(false);
    }
  }, [scrollPos]);
  return (
    <div className="who-tlf" onScroll={() => handleScroll()}>
      <div className="text-and-image-wrapper">
        <div className="text-container">
          <p>"Why </p>
          <p>the long</p>
          <p>face"</p>
          <Fade right when={reveal}>
            <img src={painting} alt="" className="fade-image" />
          </Fade>
        </div>
        <div className="image-container">
          <img src={forehead} alt="missing" className="fore-head" />
          <Div height={scrollPos * 3.08 * 2}>
            <p>When //logikbomb asked</p>
            <p> //partmeister this rather innocuous question, back</p>
            <p> in 2011, the answer was a set of graphic</p>
            <p> illustrations that proved that ‘a long face’ can be</p>
            <p> more than just one emotion. They could be cool, or</p>
            <p>cruel. Mischievous or morbid. Funny or furious.</p>
            <p> hundreds of design re-re-re-tweaks later,</p>{" "}
            <p>the Rogues Collective proudly released</p>
            <p>the WTLF project</p>
          </Div>
          <img src={chin} alt="missing" className="chin" />
        </div>
      </div>
    </div>
  );
};

export default Whotlf;
