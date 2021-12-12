import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import "./whichtlf.css";

const Whichtlf = ({ face }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const getData = async (id) => {
    try {
      const temp = await fetch(
        `https://api.whythelongface.club/faces?face=${id}`
      );
      const data = await temp.json();
      console.log(data);
      setData(data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData(page);
  }, [page]);
  return (
    <section className="which_tlf">
      <div className="item">
        <img
          className="frame"
          src="https://wtlf.mypinata.cloud/ipfs/QmTbuBzWkjxQ3Z83jKYZEJ9r4FHMw5SVUFjYtJxHvBUCqw"
        />
      </div>
      <div className="item">
        <div className="info">
          <h5>
            <span className="red_circle"></span>sold
          </h5>
          <div className="flex">
            <h2 style={{ marginRight: "20px" }}>
              {data && data.AvatarName ? data.AvatarName : "WTLF #2833"}
            </h2>{" "}
            <div>
              <b>|</b> <a href="#">OpenSea</a>
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
          <p>WTLF Grade: A</p>
          <p>WTLF Percentile: 93.7</p>
          <p>
            Rarest Features:{" "}
            <a href="#" onClick={() => setIsOpen(true)}>
              {data && data.mostRare ? data.mostRare : "Japanese Comb"}
            </a>
          </p>
          <p>
            Most common Feature:{" "}
            <a href="#" onClick={() => setIsOpen(true)}>
              {data && data.mostCommon
                ? data.mostCommon
                : "Languid Eyelids with Eye Liner"}
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
            <Search />
          </div>
        </div>
      </div>
      <div className={isOpen ? "show modal" : "hide"}>
        <div className="flex content">
          <div className="modal__img">
            <img src={data.defaultPath} />
          </div>
          <div className="modal__info">
            <div>
              <h1>japanese Comb</h1>
              <p>Rarity Grade: A</p>
              <p>occurence: 7/10000</p>
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
