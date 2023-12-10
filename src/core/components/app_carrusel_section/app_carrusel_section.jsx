import React from "react";
import AppTitle from "../app_title/app_title";
import { AppSwiper } from "../carrusel/app_swiper";
import AppSwiperSlide from "../carrusel/components/app_swiper_slider";
import AppCard from "../app_card/app_card";


const AppCarruselSection = ({ title, data }) => {
  return (
    <>
      <AppTitle >{title}</AppTitle>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
              <AppCard
                  height="150px"
                  width="270px"
                  backgroundImageSrc={e.backdrop}>
                    <AppCard.Header>
                      <AppTitle>{e.title}</AppTitle>
                    </AppCard.Header>
                  </AppCard>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarruselSection;

