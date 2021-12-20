import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const getLinks = (data, handleRarestClick) => {
  const links = data.split(",");

  return (
    <>
      {links.map((e, index) => (
        <li className="list" key={e + index}>
          <a onClick={(_) => handleRarestClick(e)}>{`#${e}`}</a>
        </li>
      ))}
    </>
  );
};

const WTLF = ({ rarity }) => {
  const navigation = useNavigate();
  const [links, setLinks] = useState([]);
  const handleLinkClick = (avatarName) => {
    navigation(`/WhichTLF?avatarName=${avatarName}`);
  };
  let { search } = useLocation();

  const query = new URLSearchParams(search);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://api.whythelongface.club/others?prop=${query.get("rarity")}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setLinks(result))
      .catch((error) => console.log("error", error));
  }, []);

  const title = `${query.get("rarity")}`;
  return (
    <div className="wtlf">
      <h1>{title}</h1>
      <ul className="link">
        {links.map((link) => {
          // <li className="list" key={index}>
          //     <a href={link.mostRare}>{link.mostRare}</a>
          // </li>
          let value = link.AvatarName.split(" ")[1];
          return getLinks(value.substr(1, value.length), handleLinkClick);
        })}
      </ul>
    </div>
  );
};

export default WTLF;
