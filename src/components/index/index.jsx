import React from "react";
import './index.css';

const Index = () => {
    return (
        <>
            {/* <section className="pad-left-right first-section">
                <div className="title red ">Why</div>
                <div className="">
                    <div className="title red">the long
                        <div className="first-section-desc">
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
                </div>
                <div className="sib-flex">
                    <img src="/SpinningHeads.gif" />
                    <span className="title red hide-sm">?</span>
                </div>
            </section> */}
            <section className="alpha pad-left-right">
                <div className="title red">
                    <span>Why&nbsp;</span>
                    <span>the&nbsp;</span>
                    <span>long&nbsp;</span>
                    <img class="shift-faces" src="/SpinningHeads.gif" />
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
            <section className="beta">
                <div className="beta-wrapper">
                    <div className="hero">
                        <div className="title red">Why is</div>
                        <div className="item2">
                            <img src="/two.png" />
                        </div>
                    </div>
                    <div className="hero">
                        <div className="title yellow item1 break__word"><span>better &nbsp;</span><span>than</span></div>
                        <div className="item2">
                            <img src="/three.png" />
                        </div>
                        <div className="title yellow item3 hide-sm item-ques">?</div>
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
                    </div>
                </div>
            </section>
            <section  className="container gamma">
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
                            <img src="/headExplode.gif" alt="head-explode" />
                        </div>
                        <div className="gamma-show-md">
                            <p>Every WTLF is made up of many different elements. And each element occurs in different numbers... some rarer than others. Be it a set of eyelashes, or a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                            <p>The rarest of the rare are the “S-Class” and and the most common is “G-Class”. Each element gets a grade and when they are added together, you get the over all WTLF grade. So a WTLF with more  rare elements is more likely to be a higher grade WTLF.  </p>
                        </div>
                    </div>
                    <div className="gamma_info_item gamma_info_item_data">

                        <div className="gamma__list">
                            <p><b>Grade S:&nbsp;</b>1-3 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade A:&nbsp;</b>4-10 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade B:&nbsp;</b>11-50 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade C:&nbsp;</b>51-500 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade D:&nbsp;</b>501-1,000 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade E:&nbsp;</b>1001-5,000 occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Grade F:&nbsp;</b>5000+ occurences</p>
                            <p>| <a>Example 1</a><a className="gamma-md-hide">| Example 2</a></p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Index;