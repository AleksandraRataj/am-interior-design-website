import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Arrow = () => {

    const [offset, setOffset] = useState(0);

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        }
    }, []);

    const showArrow = offset > 700;

    return (
        <AnimatePresence>
            {showArrow && <motion.i
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                exit={{opacity: 0}}
                className="arrow fas fa-chevron-circle-up" onClick={handleClick}/>}
        </AnimatePresence>
    )
}

export default Arrow;