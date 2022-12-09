import React from 'react';
import './Cover.css';
import cover from '../../images/cover.jpg'

const Cover = () => {
    return (
        <div className='main-cover'>
            <div className='cover-info'>
                <h1>New Collection For Fall</h1>
                <p><small>Discover all the new arrivals of ready-to-wear collection.</small></p>
                <button className='btn'>SHOP NOW</button>
            </div>
            <img src={cover}></img>
        </div>
    );
};

export default Cover; 