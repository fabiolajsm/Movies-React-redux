import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css';
import getMovieDetail from '../../redux/actions';

export default function Detail({ movie }) {
    const dispatch = useDispatch();
    const info = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(movie.id))
    }, [])

    return (
        <div className={styles.row} key={movie.id}>
            <h3>{movie.Title}</h3>
            <h4 className={styles.des}>{movie.Plot}</h4>
            <h5>{movie.Genre}</h5>
            <h5>{movie.Director}</h5>
            <h5>{movie.Writer}</h5>
            <h5>{movie.Actors}</h5>
            <h5>{movie.Language}</h5>
            <h5>{movie.Country}</h5>
            <h5>{movie.Awards}</h5>
            <h5>{movie.Released}</h5>
            <h5>{movie.Runtime}</h5>
            <h5>{movie.Type}</h5>
            <h5>{movie.Production}</h5>
            <h5>{movie.imdbRating}</h5>
        </div>
    );
};