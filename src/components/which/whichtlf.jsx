import React from 'react';
import Frame from "../../assets/picture-frame.svg";
import "./whichtlf.css";

const whichtlf = () => {
    return (
        <div className="container">
            <div className="whichTLF flex">
                <div className="frame sz50">
                    <img  src={Frame}/>
                </div>
                <div className="data sz50">
                    
                </div>
            </div>
        </div>
    );
};

export default whichtlf;