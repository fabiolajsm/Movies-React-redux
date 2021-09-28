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
                        setMessage("Watch")
                        setAlert(true)
                        dispatch(removeWatch(movie.imdbID))
                    }} > Remove from Watch </button>
                </div>
                : param === "watched" ? <div className={styles.buttons}>
                    <button type="button" className="btn btn-outline-secondary" name="removeWatch" onClick={() => {
                        setMessage("Watched")
                        setAlert(true)
                        dispatch(removeWatched(movie.imdbID))
                    }} > Remove from Watched </button>
                </div>
                    :
                    <div className={styles.buttons}>
                        <button type="button" className="btn btn-outline-secondary" name="watch" onClick={() => {
                            setMessage("Watch")
                            setAlert(true)
                            dispatch(addWatch(movie))
                        }} > Add Watch </button>
                        <button type="button" className="btn btn-outline-secondary" name="watched" onClick={() => {
                            setMessage("Watched")
                            setAlert(true)
                            dispatch(addWatched(movie))
                        }} > Add Watched </button>
                    </div>
            }
            {alert ?
                <div className="alert alert-success alert fade show" role="alert">
                    <strong>{movie.Title}</strong>, {!param ? "added to" : "removed from"} "{message}"
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setAlert(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                : null}
        </div>
    );
};