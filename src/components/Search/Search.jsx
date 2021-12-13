import React,{useState} from 'react';
import './Search.css';

const Search = () => {

    return(
        <div className='search_container'>
            <input   type="number" id="search_face" name="search_face" min="1" max="5" placeholder='Search from 1-10000'/>
            <button id="search_btn">Search</button>
        </div>
    )
}

export default Search;