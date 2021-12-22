import React, { useState, useEffect } from "react";
import forehead from "../../assets/head.png";
import chin from "../../assets/chin.png";
import painting from "../../assets/painting.png";
import four from "../../assets/meister.png"; //replace this with ringmeister image
import "./whotlf.css";
import Fade from "react-reveal/Fade";

const ShortText = (props) => {
  return (
    <div className={`text-container mt_40 ${props.superClass}`}>
      <p>"Why </p>
      <p>the long</p>
      <p>face?"</p>
      {props.children}
    </div>
  );
};

const Whotlf = () => {
  const [reveal, setReveal] = useState(false);
  const [logik, setLogik] = useState(false);
  const [expand, setExpand] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setExpand(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="who-tlf"
      onClick={() => {
        if (width <= 768) {
          setReveal(false);
          setLogik(false);
        }
      }}
    >
        <ShortText superClass="desktop">
          <Fade right when={reveal}>
            <img
              src={logik ? painting : four}
              alt=""
              className="fade-image side-img"
            />
          </Fade>
        </ShortText>
        <div className="image-container">
          <img src={forehead} alt="missing" className="fore-head" />
          <ShortText superClass={`mobile ${expand ? "shrinked" : "expanded"}`} />
          <div
            className={`text-between-images ${expand ? "expanded" : "shrinked"}`}
          >
            <p>
              When
              <span
                className="logicbomb"
                onClick={(e) => {
                  if (width <= 768) {
                    setReveal(true);
                    setLogik(true);
                    e.stopPropagation();
                  }
                }}
                onMouseEnter={() => {
                  if (width > 768) {
                    setReveal(true);
                    setLogik(true);
                  }
                }}
                onMouseLeave={() => {
                  if (width > 768) {
                    setReveal(false);
                    setLogik(false);
                  }
                }}
              >
                {" "}
              //logikbomb
              </span>{" "}
              asked
            </p>
            <p>
              <span
                className="partmeister"
                onClick={(e) => {
                  if (width <= 768) {
                    setReveal(true);
                    e.stopPropagation();
                  }
                }}
                onMouseEnter={() => {
                  if (width > 768) setReveal(true);
                }}
                onMouseLeave={() => {
                  if (width > 768) setReveal(false);
                }}
              >
              //ringmeister
              </span>{" "}
              this rather innocuous question, back
            </p>
            <p> in 2011, the answer was a set of graphic</p>
            <p> illustrations that proved that ‘a long face’ can be</p>
            <p> more than just one emotion. They could be cool, or</p>
            <p>cruel. Mischievous or morbid. Funny or furious.</p>
            <p>10 years, a few algos, a few more friends and</p>
            <p>hundreds of design re-re-re-tweaks later,</p>{" "}
            <p>the Rogues Collective proudly released</p>
            <p>the WTLF project</p>
            <Fade right when={reveal}>
              <div className="mobile-img-wrapper">
                <div
                  className="flex-container"
                  style={{ display: reveal ? "flex" : "none" }}
                >
                  <img
                    src={logik ? painting : four}
                    alt=""
                    className="fade-image-mobile"
                  />

                </div>
              </div>
            </Fade>
          </div>
          <img src={chin} alt="missing" className="chin" />
        </div>
    </div>
  );
};

export default Whotlf;
