
import React from "react";
import { useSelector } from "react-redux";
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Movies() {
    const movies = useSelector(state => state.moviesLoaded);
    return (
        <div className={styles.ctn}>
            {movies.length > 0 && (
                movies.map(movie => (
                    <div key={movie.imdbID}>
                        <Movie movie={movie} />
                    </div>
                ))
            )}
        </div>
    );
}