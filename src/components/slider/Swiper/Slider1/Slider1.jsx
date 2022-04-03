import images from "../../../../images";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
} from 'swiper';
import './slider-one.css';
// Import Swiper styles
import 'swiper/css';
import {gsap} from "gsap/gsap-core";
import {useRef} from "react";

SwiperCore.use([
    Keyboard,
    Navigation,
    Pagination,
    Mousewheel,
]);

export const Slider1 = () => {

    const slideText = useRef(null);
    const slideNumber = useRef(null);

    const onSlideChangeHandler =  () => {
    }
    return(
        <div style={{
            color: '#fff',
        }}>
            <div>
                <Swiper
                    className={'swiper-container'}
                    slidesPerView={'auto'}
                    spaceBetween={150}
                    centeredSlides={true}
                    mousewheel={true}
                    loop={true}
                    onSlideChange={onSlideChangeHandler}
                >
                    {
                        images.map((img, index) => {
                            return (
                                <SwiperSlide
                                    className={'swiper-slide'}
                                    key={img}
                                >
                                    <div className={'slide-img'}>
                                        <img src={img} alt="img"/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <footer className={'footer'}>
                <div className={'footer-wrapper'}>
                    <div className={'share'}>
                        <p>Share</p>
                    </div>
                    <div className={'more'}>
                        <p>SWIPER JS</p>
                    </div>
                    <div className={'scroll'}>
                        <p>scroll</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}