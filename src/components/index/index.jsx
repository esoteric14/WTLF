import React,{useState,useRef} from "react";
import {useNavigate} from"react-router-dom";
import Graph from "../graph";
import './index.css';




const Index = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [data, setData]=useState({imgName:"",imgSrc:""});

    const clickHandler =(name,src)=>{
        setIsOpen(true);
        // let Name=text;
        // let Src=text.split(' ').join('_')
        setData(data=>({...data,
            imgName:name,
            imgSrc:src
        }));
        console.log(isOpen);
        console.log(data);
    }
    const Modal = ({ isOpen, setIsOpen, data }) => {
        let navigation = useNavigate();
        const ref = useRef(null);
        const resetBodyStyle = () => {
          const body = document.getElementsByTagName("body")[0];
          body.style = null;
        };
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            handleClose();
          }
        };
      
        const handleClose = () => {
          resetBodyStyle();
          setIsOpen((_) => false);
        };
      
        if (isOpen) {
          const body = document.getElementsByTagName("body")[0];
          body.style.height = "100%";
          body.style.overflow = "hidden";
        } else {
          document.removeEventListener("click", handleClickOutside, false);
        }
      
        const handleBtnClick = (assetName) => {
          resetBodyStyle();
          navigation(`/WTLF?rarity=${assetName}`);
        };
      
        return (
          <div
            className={isOpen ? "show modal" : "hide"}
            onClick={handleClickOutside}
          >
            <div className="container flex overrideWidth" ref={ref}>
              <div className="flex content">
                <div className="modal__img">
                  <img src={data.imgSrc} className="img-fluid" />
                </div>
                <div className="modal__info">
                    <h2>{data.imgName}</h2>
                </div>
              </div>
              <div className="cross" title="Close" onClick={handleClose}>
                X
              </div>
            </div>
          </div>
        );
      };


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
                        Each has unqiue emotions and characteristics, some of which might make it rarer than others. Check out the rare feature on each WTLF, to get the rarer WTLF for yourself.
                        </p>
                        <a href="https://opensea.io/collection/wtlf" target="_blank">
                            <div className="openSea-btn">
                            Buy On OpenSea      
                            </div>
                        </a>
                        

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
                                Every element is picked randomly to create each unique character. Some characters have more rarer elements than others (“Camo Eyepatch” is a Level S element, as is the background. Below, the rarest element are his languid teal eyes, believe it or not ;). Elemental levels are calculated on a maximum occurence of 10,000.
                            </p>
                            <p>
                                Adding up the rarity of the different elements gives each character a total Grade (C, B, A, S & X - lowest to highest), which naturally has an impact on the price potential.
                            </p>
                            <p>
                                That’s why the one above is more likely better than the one below.
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
                    <h2>elemental rarity levels</h2>
                    <div className="gamma-hide-md">
                        <p>Every WTLF is made up of many different elements selected from a universe of over 930 unique elements. And each element occurs in the WTLF universe in different numbers... making some rarer than others. Be it a set of eyelashes, a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                        <p>The rarest of the rare are the “Level X” and and the most common is “Level D”. Each element gets a grade and when they are added together, you get the <u>over all WTLF grade.</u> So a WTLF with more  rare elements is more likely to be a higher grade WTLF.</p>
                    </div>
                </div>
                <div className="gamma_info">
                    <div className="gamma_info_item">
                        <div className="gamma-img-container">
                            <img src="/Head_Explode_Elements.gif" alt="head-explode" />
                        </div>
                        <div className="gamma-show-md">
                            <p>Every WTLF is made up of many different elements. And each element occurs in different numbers... some rarer than others. Be it a set of eyelashes, or a vintage t-shirt or one of the many fancy backgrounds, everything has a grade.</p>
                            <p>The rarest of the rare are the “S-Class” and and the most common is “G-Class”. Each element gets a grade and when they are added together, you get the over all WTLF grade. So a WTLF with more  rare elements is more likely to be a higher grade WTLF.  </p>
                        </div>
                    </div>
                    <div className="gamma_info_item gamma_info_item_data">
                        <div className="gamma__list">
                            <p><b>Level X:&nbsp;</b>1-3 Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Accessory - Laquered Comb - Orange"," https://images.wtlf.club/asset_examples/Level_X_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Clothes - Women's T-shirt - Green - Hello World"," https://images.wtlf.club/asset_examples/Level_X_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Level S:&nbsp;</b>4-10 Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Facial Hair - Chin strap - Blond"," https://images.wtlf.club/asset_examples/Level_S_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Clothes - Women's T-shirt - Navy Blue - E=MC2"," https://images.wtlf.club/asset_examples/Level_S_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Level A:&nbsp;</b>11-100 Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Eyewear - Butterfly Sunglasses - Clear Frame"," https://images.wtlf.club/asset_examples/Level_A_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Clothes - Varsity Jacket - Navy Blue - ETH Badge"," https://images.wtlf.club/asset_examples/Level_A_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Level B:&nbsp;</b>101-250 Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Background - Broadcast - Japanese Fans Peach"," https://images.wtlf.club/asset_examples/Level_B_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Hair - Chic Parting with Wild Hair - Black"," https://images.wtlf.club/asset_examples/Level_B_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Level C:&nbsp;</b>251-1,000 Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Headwear - Bowler Hat"," https://images.wtlf.club/asset_examples/Level_C_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Mouth - Rouge Lipstick"," https://images.wtlf.club/asset_examples/Level_C_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list">
                            <p><b>Level D:&nbsp;</b>1000+ Occurences</p>
                            <p>| <a onClick={()=>{clickHandler("Hair - Bald"," https://images.wtlf.club/asset_examples/Level_D_Ex1.png")}}>Example 1</a>
                            <a onClick={()=>{clickHandler("Eyewear - Clear Eyeglasses"," https://images.wtlf.club/asset_examples/Level_D_Ex2.png")}} className="gamma-md-hide">| Example 2</a></p>
                        </div>
                        <div className="gamma__list" style={{ marginTop: '20px' }}><p>(All Occurences are out of 10,000)</p></div>
                    </div>
                </div>
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    data={data}
                ></Modal>
            </section>
            <section className="container wtlf__message">
                <h2>collect your favourite WTLFs!</h2>
            </section>
        </>
    )
};

export default Index;