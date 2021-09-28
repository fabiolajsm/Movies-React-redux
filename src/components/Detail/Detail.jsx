import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Detail.module.css';
import { getMovieDetail } from '../../redux/actions';

export default function Detail({ movie }) {
    const dispatch = useDispatch();
    const info = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(movie.imdbID))
    }, [])

    return (
        <div key={movie.imdbID} className={styles.container}>
            {info ?
                <div className={styles.des}>
                    <h5>Plot: {info.Plot}</h5>
                    <h5>Actors: {info.Actors}</h5>
                    <h5>Rumtime: {info.Runtime}</h5>
                    <h5>Released: {info.Released}</h5>
                </div>
                : <div>
                    <h4>There is not info about this film</h4>
                </div>
            }
            {/* 

            {/* <h5>{info.Genre}</hu5>
            <h5>{info.Director}</h5>
            <h5>{info.Writer}</h5>
            <h5>{info.Actors}</h5>
            <h5>{info.Language}</h5>
            <h5>{info.Country}</h5>
            <h5>{info.Awards}</h5>
            <h5>{info.Released}</h5>
            <h5>{info.Runtime}</h5>
            <h5>{info.Type}</h5>
            <h5>{info.Production}</h5>
            <h5>{info.imdbRating}</h5> */}
        </div>
    );
};