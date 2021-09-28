import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWatch, addWatched, removeWatch, removeWatched } from "../../redux/actions";
import styles from './Movie.module.css';

export default function Movie({ movie, param }) {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className={styles.row} key={movie.imdbID}>
            <h3 className={styles.title}>{movie.Title}</h3>
            <img className={styles.img} src={movie.Poster.length > 7 ? movie.Poster : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt="" />
            {param === "watch" ?
                <div className={styles.buttons}>
                    <button type="button" className="btn btn-outline-secondary" name="removeWatch" onClick={() => {
                        dispatch(removeWatch(movie.imdbID))
                    }} > Remove from Watch </button>
                </div>
                : param === "watched" ? <div className={styles.buttons}>
                    <button type="button" className="btn btn-outline-secondary" name="removeWatch" onClick={() => {
                        dispatch(removeWatched(movie.imdbID))
                    }} > Remove from Watched </button>
                </div>
                    :
                    <div className={styles.buttons}>
                        <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#modal" name="watch" onClick={() => {
                            setMessage("added to Watch")
                            setAlert(true)
                            dispatch(addWatch(movie))
                        }} > Add Watch </button>
                        <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#modal" name="watched" onClick={() => {
                            setMessage("added to Watched")
                            setAlert(true)
                            dispatch(addWatched(movie))
                        }} > Add Watched </button>
                    </div>
            }
            {alert ?
                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="modal-body" id="modalLabel">{movie.Title}, {message}!</div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
};