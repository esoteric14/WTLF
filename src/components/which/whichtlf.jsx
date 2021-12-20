import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { history } from "react-router";
import Search from "../Search/Search";
import "./whichtlf.css";

import { Tooltip } from "antd";

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
  } else {
    document.removeEventListener("click", handleClickOutside, false);
  }

  const handleBtnClick = (assetName) => {
    resetBodyStyle();
    navigation(`/WTLF?rarity=${assetName}`);
  };

  return (
    <div
      className={isOpen ? "show modal" : "hide"}
      onClick={handleClickOutside}
    >
      <div className="container overrideWidth" ref={ref}>
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
            <button
              type="button"
              className="modal__btn"
              onClick={() => handleBtnClick(rarityData.assetName)}
            >
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

const getLinks = (label, data, handleFeatureClick, getRarityData) => {
  const links = data.split(",");
  if (links.length > 0) {
    return (
      <p>
        {label}
        {links.map((e, index) => {
          let value = e.trim();
          let fetchData = getRarityData(value);
          if (fetchData) {
            let { RarityGrade, Count } = fetchData;
            let title = `Rarity: ${RarityGrade}, Occurence: ${Count}/10000`;
            return (
              <div
                key={index}
                className="links"
                href="javascript:void(0)"
                onClick={() => handleFeatureClick(value)}
              >
                <span>
                  <Tooltip title={title}>{value}</Tooltip>
                </span>
              </div>
            );
          }
        })}
      </p>
    );
  }
};

const Whichtlf = () => {
  console.log("render");
  let navigation = useNavigate();
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  let defaultPage = query.get("avatarName");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(
    Math.floor(defaultPage !== null ? defaultPage : 1 + Math.random() * 10000)
  );
  const [data, setData] = useState({});
  const [rarityData, setRarityData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getRarity = (rarity) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`//api.whythelongface.club/rarity?prop=${rarity}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 0) {
          if (!rarityData.find((item) => item.Count !== result[0].Count)) {
            setRarityData((previous) => previous.concat(result[0]));
            setIsOpen(true);
          }
          if (error.length > 0) {
            setError((_) => "");
          }
        } else {
          setError((_) => "Unable to find data");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleFeatureClick = (assetName) => {
    navigation(`/WTLF?rarity=${assetName}`);
  };
  useEffect(() => {
    if (isLoading) {
      return false;
    }
    setIsLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`//api.whythelongface.club/faces?face=${page}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        if (result.length > 0) {
          console.log("face fetched result:", result);

          // search.set();
          setData((_) => result[0]);
          setRarityData((_) => []);

          if (error.length > 0) {
            setError((_) => "");
          }
        } else {
          setIsLoading(false);
          setError((_) => "Unable to fetch");
        }
      })
      .catch((error) => console.log("error", error));
  }, [page, setPage]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      let { mostRare, mostCommon } = data;
      const allKeys = mostCommon.split(",").concat(mostRare.split(","));

      allKeys.map((key) => {
        getRarity(encodeURIComponent(key));
      });
    }
  }, [rarityData]);

  const getRarityData = (label) =>
    rarityData.find((item) => item.assetName === label);
  return (
    <section className="which_tlf">
      <div className="wrapper">
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
                    type="button"
                    disabled="disabled"
                    className="btn-action"
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                  >
                    <img src="/button-left.svg" alt="left" />
                  </button>
                  <button
                    type="button"
                    className="btn-action"
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
            <p>Grade: {data.Grade}</p>
            {data.mostRare &&
              getLinks(
                "Rarest Features:",
                data.mostRare,
                handleFeatureClick,
                getRarityData
              )}

            {data.mostCommon &&
              getLinks(
                "Most Common Features: ",
                data.mostCommon,
                handleFeatureClick,
                getRarityData
              )}
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
                  if (page < 10000) {
                    setPage(page + 1);
                  }
                }}
              >
                <img src="/button-right.svg" alt="right" />
              </button>
            </div>
            <div className="search item__grow_3">
              <Search setPage={setPage} setIsLoading={setIsLoading} />
              {error.length > 0 ? <span className="error">{error}</span> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whichtlf;

// <Modal
//   isOpen={isOpen}
//   setIsOpen={setIsOpen}
//   rarityData={rarityData}
//   data={data}
// ></Modal>
