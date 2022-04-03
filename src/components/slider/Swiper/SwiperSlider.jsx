import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import images from '../../../images';
import SwiperCore, {
    Keyboard,
    Navigation,
    Pagination,
    Scrollbar,
    HashNavigation,
    Mousewheel,
    Autoplay,
    EffectFade, EffectFlip, EffectCube,
} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useEffect, useRef, useState} from "react";



SwiperCore.use([Keyboard,
    Navigation,
    Pagination,
    Scrollbar,
    HashNavigation,
    Mousewheel,
    Autoplay,
    EffectCube,
]);

export const SwiperSliderComponent = () => {

    const renderBulletHandler = (index, className) => {
        //в булетах будет номер слайда
        return '<span class="' + className +'">' + (index + 1) + '</span>'
    }

    const renderFractionHandler = (currentClass, totalClass) => {
        return `Фото <span class=${currentClass}></span> из <span class=${totalClass}></span>`
    }
   /* const [b,setV] = useState(false);
    const [err,setER] = useState(false);
    const a = useRef(b);

    useEffect(() => {
        setTimeout(() => {
            setER(true)
        },3000)
    },[])
    useEffect(() => {
        if(err) {
            a.current=true;
            setV(true)
        }
    },[err])
    console.log(a)*/
    return (
        <div className={'container'}>
            <Swiper
                className={'image-slider'}
                navigation={true}
                modules={[EffectCube, Pagination, Navigation]}
               /* pagination={{
                    //булеты (точки)
                    type:'progressbar', //все типы
                    clickable: true,
                   // dynamicBullets: true,
                   // renderBullet:(index, className) => renderBulletHandler (index, className)
                   // renderFraction:(currentClass, totalClass) => renderFractionHandler(currentClass, totalClass)
                }}*/

                /*scrollbar={{
                    draggable: true,
                }}*/


                simulateTouch={true} //перетаскивание (свайп)
                touchRatio={1} //чувствительность свайпам 0 - отключит свайп
                touchAngle={45} //угол срабатывания свайпа
                grabCursor={true} //курсор перетаскивания
                slideToClickedSlide={true} //переключение при клике на слайд

                keyboard={{
                    //управление клавиатурой
                    enabled: true,//вкл/вкл
                    onlyInViewport:true, //вкл/вкл когда в пределах вьюпорта
                    pageUpDown:true, //управление клавишами pageUp, pageDown
                }}

                mousewheel={{
                    sensitivity: 1, //чувствительность
                    //eventsTarget: 'container' //класс на котором будет срабатывать прокрутка
                    //убираем чтобы если много слайдеров, чтобы они все не переключались
                }}

                /*hashNavigation={{
                    watchState: true,
                }}*/

                //autoHeight={true} //автовысота - слайдер подстравивается под контент слайда. ломает почему-то

                slidesPerView={"auto"} //количество слайдов для показа, "auto" - сам слайдер формирует количество слайдов
               spaceBetween={0} //отступы между слайдами (рх)
               slidesPerGroup={1} //количество пролистываемых слайдов
                centeredSlides={true} //активный слайд по центру
                initialSlide={0} //стартовый слайд , первый слайд - 0

                loop={true} //бесконечный слайдер
               // loopedSlides={3} //количество дублир слайдов, если slidesPerView auto

               // freeMode={true} //свободный режим - перетаскиваем слайды без фиксиров позиций (как лента)

                autoplay={{
                    delay: 3000, //пауза между прокруткой
                    stopOnLastSlide: false, //закончить на последнем слайде
                    disableOnInteraction:false, //отключить после ручного переключения
                }}

              //  watchOverflow={true} //отключение функционала если слайдов меньше чем нужно
              //  watchSlidesVisibility={true}
              //  watchSlidesProgress={true}

                speed={2000} //скорость переключения слайдов

               // effect={"cube"} //эффекты переключения слайдов

                /*fadeEffect={{
                    crossFade:true, //параллельна смена прозрачности
                }}*/

               /* flipEffect={{
                    slideShadows:true,//тень
                    limitRotation:true, //показ только активного слайда
                }}*/

                // cubeEffect={{
                //     slideShadows:true,
                //     shadow:true,
                //     shadowOffset:20,
                //     shadowScale:0.94,
                // }}

                //direction={'vertical'} //вертикальный слайдер
            >
                {
                    images.map((img, index) => {
                        return (
                            <SwiperSlide
                                data-hash={`slide1${index}`}
                                className={'image-slider__slide swiper-slide'}
                                key={img}
                            >
                                <div className={'image-slider__image'}>
                                    <img src={img} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}