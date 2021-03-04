import React from 'react';
import "../styles/Modal.css";
import {AnimatePresence, motion} from 'framer-motion';

const Modal = (
    {
        images,
        selectedImage,
        setSelectedImage,
    }) => {

    const handleClick = (event) => {
        if(event.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    }

    const handleClickPrev = () => {
        let current;
        if(selectedImage.id === 0){
            current = images.length - 1;
            setSelectedImage(images[current]);
        } else {
            current = selectedImage.id - 1;
            setSelectedImage(images[current]);
        }

    }

    const handleClickNext = () => {

        let current;
        if(selectedImage.id === images.length - 1){
            setSelectedImage(images[0]);
        } else {
            current = selectedImage.id + 1;
            setSelectedImage(images[current]);
        }
    }

    console.log(selectedImage);

    return(
        <AnimatePresence>
            <motion.div
                className="backdrop"
                onClick={handleClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                exit={{opacity: 0}}
            >
                <img className="backdrop__image" src={selectedImage.path} alt=""/>
                <div className="backdrop__icon-wrapper">
                    <i className="backdrop__icon fas fas fa-chevron-circle-left" onClick={() => handleClickPrev()}/>
                    <i className="backdrop__icon fas fas fa-chevron-circle-right" onClick={() => handleClickNext()}/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal;