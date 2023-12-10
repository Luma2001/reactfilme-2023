import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import { getPopularMovies, getPlayingMovies,getUpcomingMovies } from '../services/movie.services';
import useSWR from 'swr';
import AppButton from '../../../core/components/button/app_button';
import 'swiper/css';
import AppCarruselSection from '../../../core/components/app_carrusel_section/app_carrusel_section';


const HomeView = () => {


  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  const {
    data: upComingMovies,
    error: upComingMoviesError,
    isLoading: upComingMoviesIsLoading,
  } = useSWR("getUpcomingMovies",getUpcomingMovies);

  const {
    data: playingMovies,
    error: playingMoviesError,
    isLoading: playingMoviesIsLoading,
  } = useSWR("getPlayingMovies", getPlayingMovies);



  const { logout, isLoggedIn } = useAuth();

  console.log("estado ", isLoggedIn);
  console.log(upComingMovies);

  const getUser =async () =>{alert("Hola, Bienvenido Visitante");}
  
  return (

    <>
    <div>
          <h1>HORAS DE ENTRETENIMIENTO</h1>

          <AppButton onClick={getUser}>Saludar</AppButton>
          
          <AppButton onClick={logout}>Cerrar Sesión</AppButton>

          <p><br/></p>

            <AppCarruselSection title={"Las Películas más populares"} data={popularMovies}/>
            <p><br/></p>
            <AppCarruselSection title={"Novedades: agregadas recientemente"} data={upComingMovies}/>
            <p><br/></p>
            <AppCarruselSection title={"Continuar viendo"} data={playingMovies}/>

            
    </div>

    

    </>
  )
}
/**/
export default HomeView