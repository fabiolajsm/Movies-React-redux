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
    }, [dispatch, movie.imdbID])

    return (
        <div key={movie.imdbID} className={styles.container}>
            {info ?
                <div className={styles.des}>
                    <h6>Plot: <span className={styles.data}>{info.Plot}</span></h6>
                    <h6>Actors: <span className={styles.data}>{info.Actors}</span></h6>
                    <h6>Released: <span className={styles.data}>{info.Released}</span></h6>
                    <h6>Rumtime: <span className={styles.data}>{info.Runtime}</span></h6>
                    <h6>Type: <span className={styles.data}>{info.Type}</span></h6>
                </div>
                : <div className={styles.des}>
                    <h4>There is not info about this film</h4>
                </div>
            }
        </div >
    );
};