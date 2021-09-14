import { GET_MOVIES } from './index';

export default function getMovies(title) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${title}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}