import React from 'react';

import '../styles/Background.css';

const Background = () => {

    const slidesPaths = [
        {path: "/images/backgrounds/bgc1.jpg"},
        {path: "/images/backgrounds/bgc2.jpg"},
        {path: "/images/backgrounds/bgc3.jpg"},
        {path: "/images/backgrounds/bgc4.jpg"}
    ];

    const slides = slidesPaths.map((slide, index) => {
        return(
            <div key={index} className="background__slide-image" style={{backgroundImage: `url(${slide.path})`}}/>
        );
    });

    if(!Array.isArray(slidesPaths) || slidesPaths.length <= 0){
        return null;
    }

    return(
        <div className='background'>
            {slides}
        </div>
    )
}

export default Background;