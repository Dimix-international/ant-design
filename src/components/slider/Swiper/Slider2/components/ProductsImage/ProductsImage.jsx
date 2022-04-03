import PropTypes from "prop-types";
import './products.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import {useState} from "react";

export const ProductsImages = ({images}) => {

    const [activeThumb, setActiveThumb] = useState();
    return(
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                centeredSlides={true}
                mousewheel={true}
                loop={true}
                grabCursor={true}
                thumbs={{
                    swiper: activeThumb
                }}
                className={'product-image-slider'}
                modules={[Navigation, Thumbs]}
            >
                {
                    images.map((img, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <img src={img} alt="img"/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                slidesPerView={4}
                spaceBetween={10}
                mousewheel={true}
                loop={true}
                className={'product-image-thumbs'}
                modules={[Navigation, Thumbs]}
            >
                {
                    images.map((img, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <div className={'product-image-thumbs-wrapper'}>
                                    <img src={img} alt="img"/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

ProductsImages.propTypes = {
    images: PropTypes.array.isRequired
}