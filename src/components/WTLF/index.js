import React from "react";
import './index.css';

const links = new Array(200).fill('#link')

const WTLF = () => {
    return (
        <div className="wtlf">
            <h1>Japanese Comb</h1>
            <ul className="link">
                {links.map(link => (
                    <li className="list">
                        <a href={link}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WTLF;