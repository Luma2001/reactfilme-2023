import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 




export default class Carrusel extends React.Component {

    render() {
        return(

            <Swiper className="swiper-container">
                
                <SwiperSlide className='slide-item'>1</SwiperSlide>

                <SwiperSlide className='slide-item'>2</SwiperSlide>

                <SwiperSlide className='slide-item'>3</SwiperSlide>

                <SwiperSlide className='slide-item'>4</SwiperSlide>

                <SwiperSlide className='slide-item'>5</SwiperSlide>

            </Swiper>
        );
    }
}