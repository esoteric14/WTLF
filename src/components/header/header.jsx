import React from 'react';
import "./header.css"
import {  BrowserRouter as Router, Link } from 'react-router-dom';


const header = () => {
    return (
        <div className="container">
            <nav>
                <h3>WTLF.club</h3>
                <ul>
                    <Link to="/"> <li>WhatTLF?</li></Link>
                    <Link to="/WhoTLF"> <li>WhoTLF?</li></Link>
                    <Link to="/WhichTLF"> <li>WhichTLF?</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default header;