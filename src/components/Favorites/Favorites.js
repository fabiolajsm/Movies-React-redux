import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import removeMovieFavorite from "../../redux/actions/removeMovieFavorites";
// import { bindActionCreators } from "redux";

// traducir un componente de clase a un componente de funcion !
// function ConnectedList({favorites, removeFromFavorites}){
//     // se que props recibo favorites y removeFromFavorites
//     // useState es solo para estados LOCALES !
//     // {favorites, removeFromFavorites} = props;
//
//     return(
//         <div>
//             <h2>Películas Favoritas</h2>
//             <ul>
//                 {
//                     favorites.map((movie)=> (
//                         <li key={movie.id}>
//                             <Link to={`/movie/${movie.id}`}>
//                                 {movie.title}
//                             </Link>
//                             <button onClick={()=>{removeFromFavorite(movie.id)}}>X</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
export class ConnectedList extends Component {

  // cuando yo invoco al constructor
  // si estoy extendiendo de otra clase
  // tengo que invocar al super si o si porque ....
  // sabemos que lo que es constructor y tiene this.state >> en componente de funcion se traduce en un useState
  render() {
    // el render en un componente de funcion se traduce directamente al return
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.pelisFavs.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.title}
                </Link>
                <button onClick={() => { this.props.removeMovieFavorite(movie.id) }}>X</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pelisFavs: state.moviesFavourites
  }
}

// function mapDispatchToProps(dispatch){
//     return {
//         remove: id => dispatch(removeFromFavorite(id))
//     }
// }
//
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(removeFromFavorite, dispatch);
// }

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
