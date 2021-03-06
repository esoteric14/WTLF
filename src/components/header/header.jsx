import React, { useState } from "react";
import "./header.css";
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
            className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
            to="/"
          >
            <li>
              WhatTLF
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
            to="/WhichTLF"
          >
            <li>
              WhichTLF
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
            to="/WhoTLF"
          >
            <li>
              WhoTLF
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
            to="/WhereTLF"
          >
            <li>
              WhereTLF
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
              className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
              to="/"
            >
              <li onClick={displaynav}>
                WhatTLF
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
              to="/WhichTLF"
            >
              <li onClick={displaynav}>
                WhichTLF
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
              to="/WhoTLF"
            >
              <li onClick={displaynav}>
                WhoTLF
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active link-menu" : "inactive link-menu")}
              to="/WhereTLF"
            >
              <li onClick={displaynav}>
                WhereTLF
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className={dropdownOpen ? "addspace" : "nospace"}></div>
      <p className="header__tag"><a href="https://www.roguescollective.com" target="_blank" rel="noopener noreferrer">//roguescollective</a></p>
    </div>
  );
};

export default Header;