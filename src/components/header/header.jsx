import React from "react";
import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const displaynav = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <div className="header">
      <nav className={dropdownOpen ? "fixedNav" : "normalNav"}>
        <h3>WTLF.club</h3>
        <ul className="non-burger">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/"
          >
            {" "}
            <li>
              WhatTLF<span>?</span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/WhoTLF"
          >
            {" "}
            <li>
              WhoTLF<span>?</span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            className="link-menu"
            to="/WhichTLF"
          >
            {" "}
            <li>
              WhichTLF<span>?</span>
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
              <li>
                WhatTLF<span>?</span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="link-menu"
              to="/WhoTLF"
            >
              {" "}
              <li>
                WhoTLF<span>?</span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              className="link-menu"
              to="/WhichTLF"
            >
              {" "}
              <li>
                WhichTLF<span>?</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <p className="moto">//roguescollective</p>
    </div>
  );
};

export default Header;
