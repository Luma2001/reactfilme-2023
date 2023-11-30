import React from 'react'
import { useRef } from 'react';


export const AppSwiper = ( {children}) => {
  const swiperElRef = useRef(null);

 

  return (
    <swiper-container 
        loop="true" 
        //css-mode="true"
        ref={swiperElRef}
        slides-per-view="5"
        //grid-rows="3"
        //mousewheel-force-to-axis="true"
        navigation="true" //las flechas de avance y retroceso que aparecen en los costados
        space-between="30"
      //pagination="true"//puntos que aparecen abajo indicando número de slice
        //scrollbar="true"
       
    >
        { children }
        

    </swiper-container>
  );
};