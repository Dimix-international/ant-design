import images from '../../../../images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slider.css'

import {
    ProductsImages
} from "./components/ProductsImage/ProductsImage";


export const Slider2 = () => {
    return (
        <div className={'container'}>
            <div className={'slider'}>
                <ProductsImages
                    images={images}
                />
            </div>
        </div>
    )
}