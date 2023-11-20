import { useRef } from 'react';


export const AppSwiper = () => {
  const swiperElRef = useRef(null);

 

  return (
    <swiper-container 
      className="swiper-container"
      ref={swiperElRef}
      slides-per-view="5"
      navigation="true" //las flechas que aparecen en los costados
      //pagination="true"//puntos que aparecen abajo
    >
        
            <swiper-slide className='slide-item'>Slide 1</swiper-slide>
            <swiper-slide className='slide-item'>Slide 2</swiper-slide>
            <swiper-slide className='slide-item'>Slide 3</swiper-slide>
            <swiper-slide className='slide-item'>Slide 4</swiper-slide>
            <swiper-slide className='slide-item'>Slide 5</swiper-slide>
        {/*En vez de colocar uno por uno realizo un Array */}
        
        {/*Array.from({ lengh: 20 }).map((_, index)=>(
            <swiper-slide key={index} className='slide-item'> Slide {index +1} </swiper-slide>
        ))*/}

    </swiper-container>
  );
};