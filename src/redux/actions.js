export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIES';
export const API = '528561cd';

export function getMovies(title) {
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=${API}&s=${title}`)
            .then(response => response.json())
            .then(json => {
                return json ? dispatch({ type: GET_MOVIES, payload: json }) : console.log("error get movie");
            });
    };
}

export function addMovieFavorite(movie) {
    return { type: ADD_MOVIE_FAVORITE, payload: movie };
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API}&i=${id}`)
            .then(response => response.json())
            .then(json => { dispatch({ type: GET_MOVIE_DETAIL, payload: json }); });
    }
}

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}