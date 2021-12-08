import React from 'react';
import "./header.css"
import {NavLink } from 'react-router-dom';


const header = () => {
    return (
        <div className="container">
            <nav>
                <h3>WTLF.club</h3>
                <ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} className="link-menu" to="/"> <li>WhatTLF?</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} className="link-menu" to="/WhoTLF"> <li>WhoTLF?</li></NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} className="link-menu" to="/WhichTLF"> <li>WhichTLF?</li></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default header;