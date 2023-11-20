import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';

import AppButton from '../../../core/components/button/app_button';
import { AppSwiper } from '../../../core/components/carrusel/carrusel';
import AppSwiperSlide from '../../../core/components/carrusel/components/app_swiperSlide';



const HomeView = () => {

  const { logout, isLoggedIn } = useAuth();

  console.log("estado ", isLoggedIn);

  const getUser =async () =>{alert("Hola, Bienvenido Visitante");}
  
  return (

    <>
    <div>
          <h1>HORAS DE ENTRETENIMIENTO</h1>

          <AppButton onClick={getUser}>Saludar</AppButton>
          
          <AppButton onClick={logout}>Cerrar Sesión</AppButton>
    </div>

    <h2>Las Películas más populares</h2> 
    <AppSwiper>
                 
          {Array.from({ length: 20 }).map((_, index) => (
                <AppSwiperSlide key={index}>
                  <div
                    style={{
                      height:"150px",
                      width: "250px",
                      backgroundColor: "yellowgreen"
                    }}
                  
                  
                  >
                    <h3>Slide {index+1}</h3>
                  </div>
                </AppSwiperSlide>
          ))}

    </AppSwiper>


    <h2>Recomendaciones para tí</h2> 
    <AppSwiper>
                 
          {Array.from({ length: 20 }).map((_, index) => (
                <AppSwiperSlide key={index}>
                  <div
                    style={{
                      height:"150px",
                      width: "250px",
                      backgroundColor: "yellowgreen"
                    }}
                  
                  
                  >
                    <h3>Slide {index+1}</h3>
                  </div>
                </AppSwiperSlide>
          ))}
          
    </AppSwiper>


    <h2>Películas Recientemente Agregadas</h2> 
    <AppSwiper>
                 
          {Array.from({ length: 20 }).map((_, index) => (
                <AppSwiperSlide key={index}>
                  <div
                    style={{
                      height:"150px",
                      width: "250px",
                      backgroundColor: "yellowgreen"
                    }}
                  
                  
                  >
                    <h3>Slide {index+1}</h3>
                  </div>
                </AppSwiperSlide>
          ))}
          
    </AppSwiper>

    </>
  )
}
/**/
export default HomeView