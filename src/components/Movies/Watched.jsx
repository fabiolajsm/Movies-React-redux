import React from "react";
import { useSelector } from "react-redux";
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Watch() {
    const watched = useSelector(state => state.watched);
    return (
        <>
            {watched && watched.length > 0 ?
                <div className={styles.ctn}>
                    {watched.map(movie => (
                        <div key={movie.imdbID}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
                :
                <div>
                    NO hay watched
                </div>
            }
        </>
    );
}