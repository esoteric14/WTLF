import React from "react";
import Graph from "../graph";
import './index.css';

const Index = () => {
    return (
        <>

            <section className="alpha pad-left-right">
                <div className="title red">
                    <span>Why&nbsp;</span>
                    <span>the&nbsp;</span>
                    <span>long</span>
                    <img className="shift-faces" src="/SpinningHeads.gif" alt="" />
                    <span className="question__mark">?</span>
                </div>
                <div className="description">
                    <div className="desc__content">
                        <h4>
                            “WTF is the WTLF.club?”
                        </h4>
                        <p>
                            WTLF (or ‘Why The Long Face’ for the pedants) is a set of 10,000 original, unique, on-chain, algorithmically created NFT characters by the Rogues Collective.
                        </p>
                        <p>
                            The characters were randomly generated & then hand-picked and graded for even more freshness and pop.
                        </p>
                        <p>
                            Each has unqiue characteristics, some of which might make it rarer than others. Check out the rare feature on each WTLF, to get the rarer WTLF for yourself.
                        </p>
                    </div>
                </div>
            </section>

            <section className="beta-container">
                <div className="beta">
                    <div className="beta-wrapper">
                        <div className="hero">
                            <div className="title green">Why is</div>
                            <div className="item2">
                                <img src="/Why_Better.png" alt="" />
                            </div>
                        </div>
                        <div className="hero">
                            <div className="title pink item1 break__word"><span>better </span><span>than</span></div>
                            <div className="item2">
                                <img src="/better_than.png" alt="" />
                            </div>
                            <div className="title pink item3 hide-sm item-ques">?</div>
                        </div>
                        <div className="description">
                            <h4 className="fontW-700">
                                The higher the grade, the rarer the asset!
                            </h4>
                            <p>
                                Every element is picked randomly to create unique characters. However some characters have rarer elements than others (a Japanese Lacquered Comb above versus cornrows below). Naturally this has an effect on the price of the WTLF.
                            </p>
                            <p>
                                Check out the grade bands for elemental rarity below.
                            </p>

                            <div className="grading_band mob">
                                {/* <img src='/gradingBand.png' alt="" /> */}
                                <Graph />
                            </div>
                            <div className="grading_band desktop">
                                {/* <img src='/gradingBand.png' alt="" /> */}
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container gamma">
                <div className="gamma__content">
                    <h2>Elemental rarity grades</h2>
                    <div className="gamma-hide-md">
                        <p>Every WTLF is made up of many different elements. And each element occurs in different numbers... some rarer than others. Be it a set of eyelashes, or a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                        <p>The rarest of the rare are the “S-Class” and and the most common is “G-Class”. Each element gets a grade and when they are added together, you get the over all WTLF grade. So a WTLF with more  rare elements is more likely to be a higher grade WTLF.  </p>
                    </div>
                </div>
                <div className="gamma_info">
                    <div className="gamma_info_item">
                        <div className="gamma-img-container">
                            <img src="/Head-Explode-v2.gif" alt="head-explode" />
                        </div>
                        <div className="gamma-show-md">
                            <p>Every WTLF is made up of many different elements. And each element occurs in different numbers... some rarer than others. Be it a set of eyelashes, or a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                            <p>The rarest of the rare are the “S-Class” and and the most common is “G-Class”. Each element gets a grade and when they are added together, you get the over all WTLF grade. So a WTLF with more  rare elements is more likely to be a higher grade WTLF.  </p>
                        </div>
                    </div>
                    <div className="gamma_info_item gamma_info_item_data">
                        <div className="gamma__list">
                            <p><b>Grade X:&nbsp;</b>1-3 Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade S:&nbsp;</b>4-10 Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade A:&nbsp;</b>11-100 Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade B:&nbsp;</b>101-250 Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade C:&nbsp;</b>251-1,000 Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade D:&nbsp;</b>1000+ Occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list" style={{ marginTop: '20px', paddingLeft: '10px' }}><p>(All Occurences are out of 10,000)</p></div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Index;