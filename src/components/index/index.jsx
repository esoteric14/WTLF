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
            <section>
                <div className="pad-left-right">
                    <div className="hero ng-mr-80">
                        <div className="title red item1">Why the long</div>
                        <div className="item2">
                            <img src="/SpinningHeads.gif" />
                        </div>
                        <div className="title red item3 hide-sm">?</div>
                    </div>
                    <div className="hero">
                        <div className="item hero_desc">
                            <div className="item hero-desc">
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
                        <div className="item"></div>
                    </div>
                </div></section>
            <section className="beta">
                <div className="hero">
                    <div className="title red">Why is</div>
                    <div className="item2">
                        <img src="/two.png" />
                    </div>
                </div>
                <div className="hero">
                    <div className="title yellow item1">better than</div>
                    <div className="item2">
                        <img src="/three.png" />
                    </div>
                    <div className="title yellow item3 hide-sm item-ques">?</div>
                </div>
                <div className="description">
                    <h4>
                        The higher the grade, the rarer the asset!
                    </h4>
                    <p>
                        Every element is picked randomly to create unique characters. However some characters have rarer elements than others (a Japanese Lacquered Comb above versus cornrows below). Naturally this has an effect on the price of the WTLF.
                    </p>
                    <p>
                        Check out the grade bands for elemental rarity below.
                    </p>
                </div>
            </section>
            <section className="three">
                <div className="third-wrapper">
                    <div className="grades">
                        <h2>Elemental rarity grades</h2>
                        <div className="img-mob-view">
                            <img src="/headExplode.gif"></img>
                        </div>
                        <div>
                            <p>Every WTLF is made up of many different elements. And each element occurs in different numbers... some rarer than others. Be it a set of eyelashes, or a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                            <p>The rarest of the rare are the “S-Class” and and the most common is “G-Class”. Each element gets a grade and when they are added together, you get the over all WTLF grade. So a WTLF with more  rare elements is more likely to be a higher grade WTLF.  </p>
                        </div>
                    </div>


                    <div class="flex grades-grid">
                        <div className="left sz35">
                            <img src="/headExplode.gif"></img>
                        </div>
                        <div className="right sz35">
                            <div className="lists">
                                <ul>

                                    <li><b>Grade S:</b>    1-3 occurences</li>

                                    <li><b>Grade A:  </b>  4-10 occurences</li>

                                    <li><b>Grade B:</b>    11-50 occurences</li>

                                    <li><b>Grade C: </b>   51-100 occurences</li>

                                    <li><b>Grade D: </b>   101-500 occurences</li>

                                    <li><b>Grade E: </b>   501-2,000 occurences</li>

                                    <li><b>Grade F: </b>   2,001-5,000 occurences  </li>

                                    <li><b>Grade G: </b>   5,000+  </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <div className="para-occurences">
                <div className="space"></div>
                <div className="occurences">
                    <p>
                        (All occurences are out of 10,000)</p>
                </div>
            </div>
        </>
    )
};

export default Index;