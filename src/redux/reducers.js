import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL } from './actions';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: undefined
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            console.log(action.payload);
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };
        case ADD_MOVIE_FAVORITE:
            return { ...state, moviesFavourites: state.moviesFavourites.concat(action.payload) };
        case REMOVE_MOVIE_FAVORITE:
            return { ...state, moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== action.payload) }
        case GET_MOVIE_DETAIL:
            return { ...state, movieDetail: action.payload }
        default:
            return state;
    }
}

export default rootReducer;