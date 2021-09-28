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
            hoverrrrrrrrr
            {/* <h3>{info.Title}</h3>
            <h4 className={styles.des}>{info.Plot}</h4>
            <h5>{info.Genre}</h5>
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