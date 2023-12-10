
//Creo un servicio para manejar la Api de manera Centralizada
import axios from "axios";


//Creo un servicio para manejar la Api de manera Centralizada
export const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: "es-ES",
  },
});


  export const TMDB_PATH = {

    movies:{

            topRated: "/movie/top_rated",
            popular: "/movie/popular",
            playing: "/movie/now_playing",
            upcoming: "/movie/upcoming",
            getList: "/movie/{movie_id}/lists",
            reviews: "/movie/{movie_id}/reviews",
            recommendations: "/movie/{movie_id}/recommendations",
            addRating: "/movie/{movie_id}/rating",
            images: "/movie/{movie_id}/images",
    },
    
    searchMovies: "/search/movie",
  
    tv: {
      popular: "/tv/popular",
      top_rated: "/tv/top_rated",
      airing_today: "/tv/airing_today",
    },
    images: {
      poster: {
        sizes: {
          w92: "/w92",
          w154: "/w154",
          w185: "/w185",
          w342: "/w342",
          w500: "/w500",
          w780: "/w780",
          original: "/original",
        },
        url: "https://image.tmdb.org/t/p",
      },
      backdrop: {
        sizes: {
          w300: "/w300",
          w780: "/w780",
          w1280: "/w1280",
          original: "/original",
        },
        url: "https://image.tmdb.org/t/p",
      },
    },
  
  };
  
  