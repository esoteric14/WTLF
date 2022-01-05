import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { history } from "react-router";
import Search from "../Search/Search";
import "./whichtlf.css";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { Tooltip } from "antd";

const Loader = ({ isLoading }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (isLoading) {
    return (
      <div className="loading-wrapper">
        <Spin indicator={antIcon} />
      </div>
    );
  }
  return null;
};

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
      <div className="container overrideWidth m0" ref={ref}>
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
        <b>{label}</b>
        {links.map((e, index, arr) => {
          let value = `${e.trim()}`;
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
                  <Tooltip title={title}>
                    {value}
                    {arr.length === index + 1 ? "" : ";"}
                  </Tooltip>
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
  const [isLoading, setIsLoading] = useState(true);
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
            setTimeout(() => {
              setIsLoading((_) => false);
            }, 600);
          }
          if (error.length > 0) {
            setError((_) => error);
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
    setIsLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`//api.whythelongface.club/faces?face=${page}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
        if (result.length > 0) {
          setData((_) => result[0]);
          setRarityData((_) => []);
          setTimeout(() => {
            setIsLoading(false);
          }, 600);

          if (error.length > 0) {
            setError((_) => error);
          }
        } else {
          let errorMessage =
            page > 10000 ? "We haven’t designed that yet." : "Unable to fetch";
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
          setError((_) => errorMessage);
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
    <>
      <Loader isLoading={isLoading} />
      <section className={`which_tlf`}>
        <div className="wrapper">
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
          <div className="item item-frame">
            <img className="frame" src={data.defaultPath} />
          </div>
          <div className="item item-info">
            <div className="info">
              <div className="btns item__grow_1_mobile">
                <button
                  type="button"
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
                    if (page < 10000) {
                      setPage(page + 1);
                    }
                  }}
                >
                  <img src="/button-right.svg" alt="right" />
                </button>
              </div>
              <h5 className="hide">
                <span className="red_circle"></span>sold
              </h5>
              <div className="info-box flex">
                <h2 className="title">{data.AvatarName}</h2>
                <div className="opensea_link">
                  <b className="hide">|</b>{" "}
                  <Link to="//opensea.io/collection/wtlf" className="hide">
                    OpenSea
                  </Link>
                </div>
              </div>
              <p style={{ display: "none" }}>WTLF Grade: {}</p>
              <p>
                <b>WTLF Grade: {data.Grade}</b>
              </p>
              {data.mostRare &&
                getLinks(
                  "Rarest Features: ",
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
                {error.length > 0 ? (
                  <span className="error">{error}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whichtlf;
