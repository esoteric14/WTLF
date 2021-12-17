import React from "react";
import "./header.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const displaynav = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <div className="header">
      <nav className={dropdownOpen ? "fixedNav" : "normalNav"}>
        <h3>
          <Link to="/" className="link-menu">
            WTLF.club
          </Link>
        </h3>
        <ul className="non-burger">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/"
          >
            {" "}
            <li>
              WhatTLF
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/WhichTLF"
          >
            {" "}
            <li>
              WhichTLF
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/WhoTLF"
          >
            {" "}
            <li>
              WhoTLF
            </li>
          </NavLink>
        </ul>
        <div className="hamburger" onClick={displaynav}>
          <div className="burger ham1"></div>
          <div className="burger ham2"></div>
          <div className="burger ham3"></div>
        </div>
      </nav>
      <div className={dropdownOpen ? "dropActive" : "dropInactive"}>
        <div className="dropDown">
          <ul className="burgerdropDown">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="link-menu"
              to="/"
            >
              {" "}
              <li onClick={displaynav}>
                WhatTLF
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="link-menu"
              to="/WhichTLF"
            >
              {" "}
              <li onClick={displaynav}>
                WhichTLF
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="link-menu"
              to="/WhoTLF"
            >
              {" "}
              <li onClick={displaynav}>
                WhoTLF
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className={dropdownOpen ? "addspace" : "nospace"}></div>
      <p className="header__tag">//roguescollective</p>
    </div>
  );
};

export default Header;