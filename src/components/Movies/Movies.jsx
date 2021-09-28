import React from "react";
import { useSelector } from "react-redux";
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

export default function Movies() {
    const movies = useSelector(state => state.moviesLoaded);
    return (
        <>
            {movies && movies.length > 0 ?
                <div className={styles.ctn}>
                    {movies.map(movie => (
                        <div key={movie.imdbID}>
                            <Movie movie={movie} />
                        </div>
                    ))}
                </div>
                :
                <div>
                    holaaaaaa
                </div>
            }
        </>
    );
}


// {(movies && movies.length > 0(
//     <div className={styles.ctn}>
//         {movies.map(movie => (
//             <div key={movie.imdbID}>
//                 <Movie movie={movie} />
//             </div>
//         ))}
//     </div>
// )) || (movies && watch.length > 0 && param === "watch" && (
//     <div>
//         {watch.map(movie => (
//             <div key={movie.imdbID}>
//                 <Movie movie={movie} />
//             </div>
//         ))}
//     </div>
// )) || (movies && watched.length > 0 && param === "watched" && (
//     <div>
//         {watched.map(movie => (
//             <div key={movie.imdbID}>
//                 <Movie movie={movie} />
//             </div>
//         ))}
//     </div>
// )) || <div>Algo que buscar</div>
// }