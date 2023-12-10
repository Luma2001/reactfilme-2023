import { TMDB_PATH } from '../../../../core/datasources/remote/tmdb/tmdb_api'

export const tmdbMoviesTvAdapter = (response) => {
  const { results } = response;

 
  return results.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    poster: `${TMDB_PATH.images.poster.url}${TMDB_PATH.images.poster.sizes.original}${item.poster_path}`,
    backdrop: `${TMDB_PATH.images.backdrop.url}${TMDB_PATH.images.backdrop.sizes.original}${item.backdrop_path}`,
    description: item.overview,
    rating: item.vote_average,
    video: item.video,
  }));
};
