import React from 'react';

import '../styles/Background.css';

const Background = () => {

    const slidesPaths = [
        {path: "/images/backgrounds/01.jpg"},
        {path: "/images/backgrounds/02.jpg"},
        {path: "/images/backgrounds/03.jpg"},
        {path: "/images/backgrounds/04.jpg"},
        {path: "/images/backgrounds/05.jpg"},
        {path: "/images/backgrounds/06.jpg"},
        {path: "/images/backgrounds/07.jpg"},
        {path: "/images/backgrounds/08.jpg"},
        {path: "/images/backgrounds/09.jpg"},
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