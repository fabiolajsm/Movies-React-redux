import { GET_MOVIE_DETAIL } from './index';

export default function getMovieDetail(id) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIE_DETAIL, payload: json });
            });
    }
}