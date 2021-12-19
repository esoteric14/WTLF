import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './index.css';

const getLinks = (data, handleRarestClick) => {
    const links = data.split(",");
    return (<>{links.map((e, index) => (<li className="list" key={e + index}><a href={e}>{e}</a></li>))}</>)
}

const WTLF = ({ rarity }) => {
    const [links, setLinks] = useState([])
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    console.log('tipualikhan', query.get('rarity'))
    useEffect(() => {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://api.whythelongface.club/others?prop=${query.get('rarity')}`, requestOptions)
            .then(response => response.json())
            .then(result => setLinks(result))
            .catch(error => console.log('error', error));
    }, []);


    return (
        <div className="wtlf">
            <h1>{links[0] && links[0].AvatarName}</h1>
            <ul className="link">{links.map((link) => (
                // <li className="list" key={index}>
                //     <a href={link.mostRare}>{link.mostRare}</a>
                // </li>
                getLinks(link.mostRare)
            ))}
            </ul>

        </div>
    )
}

export default WTLF;