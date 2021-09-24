import { ADD_WATCH, REMOVE_WATCH, GET_MOVIES, GET_MOVIE_DETAIL, ADD_WATCHED, REMOVE_WATCHED } from './actions';

const initialState = {
    watch: [],
    watched: [],
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
        case ADD_WATCH:
            return { ...state, watch: state.watch.concat(action.payload) };
        case REMOVE_WATCH:
            return { ...state, watch: state.watch.filter((movie) => movie.id !== action.payload) }
        case ADD_WATCHED:
            return { ...state, watched: state.watched.concat(action.payload) };
        case REMOVE_WATCHED:
            return { ...state, watched: state.watched.filter((movie) => movie.id !== action.payload) }
        case GET_MOVIE_DETAIL:
            return { ...state, movieDetail: action.payload }
        default:
            return state;
    }
}

export default rootReducer;