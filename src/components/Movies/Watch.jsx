import React from "react";
import { useSelector } from "react-redux";
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Watch() {
    const watch = useSelector(state => state.watch);
    return (
        <>
            {watch && watch.length > 0 ?
                <div className={styles.ctn}>
                    {watch.map(movie => (
                        <div key={movie.imdbID}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
                :
                <div>
                    NO hay watch
                </div>
            }
        </>
    );
}