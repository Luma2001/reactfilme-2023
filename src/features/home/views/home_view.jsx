import React from 'react';
import { useAuth } from '../../../core/auth/hook/use_auth';
import axios from 'axios';


//Creo un servicio para manejar la Api de manera Centralizada

const TMDB_API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: 'es-ES',
  }

})

const TMDB_PATH = {
  topRated: "/movie/top_rated",
  popular: "/movie/popular",
  playing: "/movie/now_playing",
  upcoming: "/movie/upcoming",
  getList: "/movie/{movie_id}/lists",
  reviews: "/movie/{movie_id}/reviews",
  recommendations: "/movie/{movie_id}/recommendations",
  addRating: "/movie/{movie_id}/rating",
  images: "/movie/{movie_id}/images",
  searchMovies: "/search/movie",



}






const HomeView = () => {

  const { logout, isLoggedIn } = useAuth();

  console.log("estado ", isLoggedIn);

  
  
  return (
    <div>
          <h1>HORAS DE ENTRETENIMIENTO</h1>
          <button onClick={logout}>Cerrar Sesión</button>
    </div>
  )
}

export default HomeView