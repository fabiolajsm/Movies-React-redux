import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWatch, addWatched, removeWatch, removeWatched } from "../../redux/actions";
import styles from './Movie.module.css';

export default function Movie({ movie, param }) {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    function handleClick(e) {
        switch (e.target.name) {
            case "watch":
                setMessage(`added to "Watch"`)
                setModal(true)
                dispatch(addWatch(movie))
                break;
            case "watched":
                setMessage(`added to "Watched"`)
                setModal(true)
                dispatch(addWatched(movie))
                break;
            case "removeWatch":
                dispatch(removeWatch(movie.imdbID))
                break;
            case "removeWatched":
                dispatch(removeWatched(movie.imdbID))
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.row} key={movie.imdbID}>
            <h3 className={styles.title}>{movie.Title}</h3>
            <img className={styles.img} src={movie.Poster.length > 7 ? movie.Poster : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt="" />
            {param === "watch" ?
                <div className={styles.buttons}>
                    <button type="button" className="btn btn-outline-secondary" name="removeWatch" onClick={handleClick} > Remove from Watch </button>
                </div>
                : param === "watched" ? <div className={styles.buttons}>
                    <button type="button" className="btn btn-outline-secondary" name="removeWatched" onClick={handleClick} > Remove from Watched </button>
                </div>
                    :
                    <div className={styles.buttons}>
                        <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#modal" name="watch" onClick={handleClick} > Add Watch </button>
                        <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#modal" name="watched" onClick={handleClick} > Add Watched </button>
                    </div>
            }
            {modal ?
                <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-body" id="modalLabel">{movie.Title}, {message}</div>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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