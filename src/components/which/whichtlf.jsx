import React, { useState } from 'react';
import Search from '../Search/Search';
import "./whichtlf.css";

const Whichtlf = ({ face }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="container which_tlf">
            <div className="item">
                {/* <img src="/frame.svg" /> */}
                <img className='frame' src="https://wtlf.mypinata.cloud/ipfs/QmTbuBzWkjxQ3Z83jKYZEJ9r4FHMw5SVUFjYtJxHvBUCqw" width="450" height="600" />
            </div>
            <div className="item">
                <div className='info'>
                    <h5><span className='red_circle'></span>sold</h5>
                    <div className='flex'><h2 style={{ marginRight: '20px' }}>WTLF #2833</h2> <div><b>|</b> <a href="#">OpenSea</a></div></div>
                    <p>WTLF Grade: A</p>
                    <p>WTLF Percentile: 93.7</p>
                    <p>Rarest Features: <a href='#' onClick={() => setIsOpen(true)}>Japanese Comb</a></p>
                    <p>Most common Feature: <a href='#' onClick={() => setIsOpen(true)}>Languid Eyelids with Eye Liner</a></p>
                </div>
                <div className="action">
                    <div className="btns item__grow_1">
                        <button>
                            <img src="/button-left.svg" />
                        </button>
                        <button>
                            <img src="/button-right.svg" />
                        </button>
                    </div>
                    <div className="search item__grow_3" >
                        <Search />
                    </div>
                </div>
            </div>
            <div className={isOpen ? 'show modal' : 'hide'}>
                <div className='flex content'>
                    <div className='modal__img'>
                        <img src="" />
                    </div>
                    <div className='modal__info'>
                        <div>
                            <h1>japanese Comb</h1>
                            <p>Rarity Grade: A</p>
                            <p>occurence: 7/10000</p>
                        </div>
                        <button className='modal__btn'>WTLF's</button>
                    </div>
                </div>
                <div className='cross' title="Close" onClick={() => setIsOpen(false)}>
                    X
                </div>
            </div>
        </section>
    );
};

export default Whichtlf;