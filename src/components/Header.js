import React from 'react';
import humanHeart from '../human-heart.png';

function Header(props) {
    return (
        <div id='Header'>
            <h1>Mónica <br></br>Larisa</h1>
            <img src={humanHeart} alt='human heart illustration' />
        </div>
    )
}

export default Header;