import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import "./whichtlf.css";

const Modal = ({ isOpen, setIsOpen, data, rarityData }) => {
  let navigation = useNavigate();
  const ref = useRef(null);
  const resetBodyStyle = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style = null;
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClose();
    }
  };

  const handleClose = () => {
    resetBodyStyle();
    setIsOpen((_) => false);
  };

  if (isOpen) {
    document.addEventListener("click", handleClickOutside, false);
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "100%";
    body.style.overflow = "hidden";
    console.log("body:", body);
  } else {
    document.removeEventListener("click", handleClickOutside, false);
  }

  const handleBtnClick = (_) => {
    resetBodyStyle();
    navigation("/WTLF");
  };

  return (
    <div
      className={isOpen ? "show modal" : "hide"}
      onClick={handleClickOutside}
    >
      <div className="container" ref={ref}>
        <div className="flex content">
          <div className="modal__img">
            <img src={data.defaultPath} className="img-fluid" />
          </div>
          <div className="modal__info">
            <div>
              <h1>{rarityData.assetName}</h1>
              <p>Rarity Grade: {rarityData.rarityGrade}</p>
              <p>occurence: {rarityData.Count}/10000</p>
            </div>
            <button className="modal__btn" onClick={handleBtnClick}>
              WTLF's
            </button>
          </div>
        </div>
        <div className="cross" title="Close" onClick={handleClose}>
          X
        </div>
      </div>
    </div>
  );
};
const Whichtlf = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(Math.floor(1 + Math.random() * 10000));
  const [data, setData] = useState({});
  const [rarityData, setRarityData] = useState({});
  const [error, setError] = useState("");
  const getRarity = (rarity) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`//api.whythelongface.club/rarity?prop=${rarity}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          setRarityData(result[0]);
          setIsOpen(true);
          if (error.length > 0) {
            setError((_) => "");
          }
        } else {
          setError((_) => "Unable to find data");
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleRarestClick = (value) => {
    getRarity(encodeURIComponent(value));
  };
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`//api.whythelongface.club/faces?face=${page}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          setData(result[0]);
          if (error.length > 0) {
            setError((_) => "");
          }
        } else {
          setError((_) => "Unable to fetch");
        }
      })
      .catch((error) => console.log("error", error));
  }, [page]);
  return (
    <section className="which_tlf">
      <div className="item item-frame">
        <img className="frame" src={data.defaultPath} />
      </div>
      <div className="item item-info">
        <div className="info">
          <h5 className="hide">
            <span className="red_circle"></span>sold
          </h5>
          <div className="info-box flex">
            <h2 style={{ marginRight: "20px" }}>{data.AvatarName}</h2>
            <div className="opensea_link">
              <b className="hide">|</b>{" "}
              <Link to="//opensea.io/collection/wtlf" className="hide">
                OpenSea
              </Link>
              <div className="btns item__grow_1_mobile">
                <button
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                >
                  <img src="/button-left.svg" alt="left" />
                </button>
                <button
                  onClick={() => {
                    if (page < 1000) {
                      setPage(page + 1);
                    }
                  }}
                >
                  <img src="/button-right.svg" alt="right" />
                </button>
              </div>
            </div>
          </div>
          <p style={{ display: "none" }}>WTLF Grade: {}</p>
          <p>WTLF Percentile: {data.wtlfScore}</p>
          <p>
            Rarest Features:{" "}
            <a
              href="javascript:void(0);"
              onClick={() => handleRarestClick(data.mostRare)}
            >
              {data.mostRare}
            </a>
          </p>
          <p>
            Most common Feature:{" "}
            <a
              href="javascript:void(0);"
              onClick={() => handleRarestClick(data.mostCommon)}
            >
              {data.mostCommon}
            </a>
          </p>
        </div>
        <div className="action">
          <div className="btns item__grow_1">
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            >
              <img src="/button-left.svg" alt="left" />
            </button>
            <button
              onClick={() => {
                if (page < 1000) {
                  setPage(page + 1);
                }
              }}
            >
              <img src="/button-right.svg" alt="right" />
            </button>
          </div>
          <div className="search item__grow_3">
            <Search setPage={setPage} />
            {error.length > 0 ? <span className="error">{error}</span> : null}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        rarityData={rarityData}
        data={data}
      ></Modal>
    </section>
  );
};

export default Whichtlf;
