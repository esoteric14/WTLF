import React from 'react';
import Frame from "../../assets/picture-frame.svg";
import buttonLeft from "../../assets/button-left.svg";
import buttonRight from"../../assets/button-right.svg";
import "./whichtlf.css";

const whichtlf = () => {
    return (
        <div className="container">
            <div className="whichTLF flex">
                <div className="frame sz50">
                    <img  src={Frame}/>
                </div>
                <div className="card sz50">
                    <div className="card-wrapper">
                        <div className="data">
                            <h2>WTLF #7203</h2>
                            <ul>
                                <li><b>WTLF Grade:</b> B  </li>
                                <li><b>WTLF Percentile:</b> 88.2</li>
                                <li><b>Rarest Features:</b> Tattoo #19</li>
                                <li><b>Most Common Feature:</b> Comb Over</li>
                            </ul>
                        </div>
                    <div className="navBtn-search-holder flex">
                        <div className="navBtn flex">
                            <div className="btn btn-left">
                                <img src={buttonLeft}></img>
                            </div>
                            <div className="btn btn-right">
                                <img src={buttonRight}></img>
                            </div>
                        </div>
                        {/* <div className="search-box flex">
                            <input type="text"></input>
                            <div className="submit-btn">search</div>
                        </div> */}
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default whichtlf;