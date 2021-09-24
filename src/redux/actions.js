export const ADD_WATCH = 'ADD_WATCH';
export const REMOVE_WATCH = 'REMOVE_WATCH';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIES';
export const ADD_WATCHED = 'ADD_WATCHED';
export const REMOVE_WATCHED = 'REMOVE_WATCHED';
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

export function addWatch(movie) {
    return { type: ADD_WATCH, payload: movie };
}

export function addWatched(movie) {
    return { type: ADD_WATCHED, payload: movie };
}


export function removeWatch(id) {
    return {
        type: REMOVE_WATCH,
        payload: id
    }
}

export function removeWatched(id) {
    return {
        type: REMOVE_WATCHED,
        payload: id
    }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API}&i=${id}`)
            .then(response => response.json())
            .then(json => { dispatch({ type: GET_MOVIE_DETAIL, payload: json }); });
    }
}