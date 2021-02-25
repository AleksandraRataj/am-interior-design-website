import React from 'react';
import Modal from "./Modal";
import Data from "../data/realizationsPublic.json";


const ImageGrid = (
    {
        images,
        selectedImage,
        setSelectedImage,
        prevImage,
        setPrevImage
    }) => {

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
       <div>
           dfg
       </div>
    );
}

export default ImageGrid;



