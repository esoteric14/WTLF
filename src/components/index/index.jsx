import React from "react";
import './index.css';

const Index = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="hero ng-mr-80">
                        <div className="title red item1">Why the long</div>
                        <div className="item2">
                            <img src="/SpinningHeads.gif" />
                        </div>
                        <div className="title red item3 hide-sm">?</div>
                    </div>
                    <div className="hero">
                        <div className="item hero_desc">
                            <div className="item">
                                <h5>
                                    “WTF is the WTLF.club?”
                                </h5>
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
                    <div className="title yellow item3 hide-sm">?</div>
                </div>
                <div className="description">
                    <h5>
                        The higher the grade, the rarer the asset!
                    </h5>
                    <p>
                        Every element is picked randomly to create unique characters. However some characters have rarer elements than others (a Japanese Lacquered Comb above versus cornrows below). Naturally this has an effect on the price of the WTLF.
                    </p>
                    <p>
                        Check out the grade bands for elemental rarity below.
                    </p>
                </div>
            </section>
        </>
    )
};

export default Index;