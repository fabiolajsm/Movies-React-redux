import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWatch, addWatched } from "../../redux/actions";
import styles from './Movie.module.css';

export default function Movie({ movie }) {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);

    return (
        <div className={styles.row} key={movie.imdbID}>
            <h3 className={styles.title}>{movie.Title}</h3>
            <img className={styles.img} src={movie.Poster.length > 7 ? movie.Poster : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt="" />
            <div className={styles.buttons}>
                <button type="button" className="btn btn-outline-secondary" name="watch" onClick={() => {
                    setAlert(true)
                    dispatch(addWatch(movie))
                }} > Add Watch </button>
                <button type="button" className="btn btn-outline-secondary" name="watched" onClick={() => {
                    setAlert(true)
                    dispatch(addWatched(movie))
                }} > Add Watched </button>
            </div>
            {alert ?
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{movie.Title}</strong> , was added
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => setAlert(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                : null}
        </div>
    );
};