import {motion} from "framer-motion";
import images from '../../images';
import  './slider.css';
import {useEffect, useRef, useState} from "react";

//https://www.youtube.com/watch?v=W0bEL93tt4k

export const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
    return(
        <div className={'container'}>
            <motion.div
                ref={carousel}
                className={'carousel'}
                whileTap={{
                    cursor: 'grabbing',
                }}
            >
                <motion.div
                    drag={'x'}
                    dragConstraints={{
                        right: 0,
                        left: -width,
                    }}
                    className={'inner-carousel'}>
                    {
                        images.map(img => (
                            <motion.div key={img} className={'item'}>
                                <img  src={img} alt={''}/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}
