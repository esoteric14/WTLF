import React from 'react';
import "./wheretlf.css";

const Whotlf = () => {
    return (
        <section className='social'>
            <ul className='social-container'>
                <li className='fb'>
                    <a title='Facebook'>
                        <img src="/social/fb.png" alt="fb" />
                        <span>rogues collective<br /><span style={{fontSize: '20px', fontWeight: '100'}}>(Pages)</span></span>
                    </a>
                </li>
                <li className='insta'>
                    <a href='https://www.instagram.com/roguescollect/' target="_blank" rel="noopener noreferrer" title='Instagram'>
                        <img src="/social/insta.png" alt="Instagram" />
                        <span>@roguescollect</span>
                    </a>
                </li>
                <li className='twitter'>
                    <a href='https://twitter.com/RoguesCollect' target="_blank" rel="noopener noreferrer" title='Twitter'>
                        <img src="/social/twitter.png" alt="twitter" />
                        <span>@roguescollect</span>
                    </a>
                </li>
            </ul>
            <p className='social-connect'>or drop us an old-fashioned email at <a href='mailto:hi@roguescollective.com'>hi@roguescollective.com</a></p>
        </section>
    )
}

export default Whotlf;