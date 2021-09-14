import { ADD_MOVIE_FAVORITE } from './index';

export default function addMovieFavorite(movie) {
    return { type: ADD_MOVIE_FAVORITE, payload: movie };
}