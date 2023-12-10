import { useRef, useEffect } from 'react';




export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);

  

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="5"
      loop
      navigation="true"
      
    >
        {children}
      
      
      
    </swiper-container>
  );
};
//<swiper-slide></swiper-slide>