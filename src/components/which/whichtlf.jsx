import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import "./whichtlf.css";
import { Link } from "react-router-dom";

const Whichtlf = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [rarityData, setRarityData] = useState({});
  const getRarity = (rarity)=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://api.whythelongface.club/rarity?prop=${rarity}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setRarityData(result[0]);
        setIsOpen(true);
      })
      .catch(error => console.log('error', error));
  }
  const handleRarestClick = (value) => {
    getRarity(encodeURIComponent(value));
  }
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://api.whythelongface.club/faces?face=${page}`, requestOptions)
      .then(response => response.json())
      .then(result => setData(result[0]))
      .catch(error => console.log('error', error));
  }, [page]);
  return (
    <section className="which_tlf">
      <div className="item item-frame">
        <img
          className="frame"
          src={data.defaultPath}
        />
      </div>
      <div className="item item-info">
        <div className="info">
          <h5 className="hide">
            <span className="red_circle"></span>sold
          </h5>
          <div className="flex">
            <h2 style={{ marginRight: "20px" }}>
              {data.AvatarName}
            </h2>
            <div className="opensea_link">
              <b className="hide">|</b> <Link to="http://opensea.io/collection/wtlf" className="hide">OpenSea</Link>
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
          <p style={{display: 'none'}}>WTLF Grade: {}</p>
          <p>WTLF Percentile: {data.wtlfScore}</p>
          <p>Rarest Features: <a href="javascript:void(0);" onClick={() => handleRarestClick(data.mostRare)}>{data.mostRare}</a></p>
          <p>Most common Feature: <a href="javascript:void(0);" onClick={() => handleRarestClick(data.mostCommon)}>{data.mostCommon}</a></p>
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
          </div>
        </div>
      </div>
      <div className={isOpen ? "show modal" : "hide"}>
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
            <button className="modal__btn">WTLF's</button>
          </div>
        </div>
        <div className="cross" title="Close" onClick={() => setIsOpen(false)}>
          X
        </div>
      </div>
    </section>
  );
};

export default Whichtlf;
