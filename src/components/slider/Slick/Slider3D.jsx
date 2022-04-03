import Slider from "react-slick";
import images from "../../../images";
import './slider.css';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useEffect, useState} from "react";
//https://www.youtube.com/watch?v=odSfSAoUREU&t=2s
//https://react-slick.neostack.com/docs/get-started
//https://react-icons.github.io/react-icons/

export const Slider3D = () =>{

    const NextArrow = ({onClick}) => {
        return (
            <div
                className={"arrow next"}
                onClick={onClick}
            >
            <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div
                className={"arrow prev"}
                onClick={onClick}
            >
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);
    const small = window.matchMedia("(max-width:768px");


    const settings = {
        className:'sliderB',
        infinite: true,
        lazyLoad:true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange:(current, next) => setImageIndex(next),
    }

    const slideClass = (index) => index === imageIndex
        ? 'slide activeSlide' : 'slide';

    if(small.matches) {
        settings.slidesToShow = 1;
        settings.arrows = false
    }

    return(
        <div className={'container'}>
            <Slider {...settings} >
                {
                    images.map((img, index) => (
                        <div key={index}  className={slideClass(index)}>
                            <div className={`image`}>
                                <img src={img} alt={img}/>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}