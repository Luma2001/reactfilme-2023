import {TMDB_API, TMDB_PATH} from '../../../core/datasources/remote/tmdb/tmdb_api'
import { tmdbMoviesTvAdapter } from './adapters/tmdbAdapters';

export const getPopularMovies = async () =>{
    const { data } = await TMDB_API.get(TMDB_PATH.movies.popular);
    return tmdbMoviesTvAdapter (data);
}

export const getUpcomingMovies = async () =>{
    const { data } = await TMDB_API.get(TMDB_PATH.movies.upcoming);
    return tmdbMoviesTvAdapter (data);
}

export const getPlayingMovies = async () =>{
    const { data } = await TMDB_API.get(TMDB_PATH.movies.playing);
    return tmdbMoviesTvAdapter (data);
}