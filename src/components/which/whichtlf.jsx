import React from 'react';
import Search from '../Search/Search';

import "./whichtlf.css";

const whichtlf = ({face}) => {
    return (
        <section className="container which_tlf">
            <div className="item">
                <img src="/frame.svg" />
            </div>
            <div className="item">
                <div className='info'>
                    <h2>WTLF #2833</h2>
                    <p>WTLF Grade: A</p>
                    <p>WTLF Percentile: 93.7</p>
                    <p>Rarest Features: <a href='#'>Japanese Comb</a></p>
                    <p>Most common Feature: <a href='#'>Languid Eyelids with Eye Liner</a></p>
                </div>
                <div className="action">
                    <div className="btns item__grow_1">
                        <button>
                            <img src="/button-left.svg"/>
                        </button>
                        <button>
                            <img src="/button-right.svg"/>
                        </button>
                    </div>
                    <div className="search item__grow_3" >
                        <Search/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default whichtlf;