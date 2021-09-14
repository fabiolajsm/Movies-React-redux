import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import getMovies from "../../actions/getMovies";
import addMovieFavorite from "../../redux/actions/addMovieFavorite";


// function Buscador(props){
//   [input, setInput] = useState({title: "", description: ""});
//
//   function handleChange(e){
//      setInput(prev => ({...prev, [e.target.name]:e.target.value}))
//      setInput({...input, [e.target.name]:e.target.value})
//   }
// }

export class Buscador extends Component {
  constructor(props) {
    console.log(props, 'stateeee global');
    super(props);
    this.state = {
      title: ""
    };
  }

  // PROHIBIDO !!!
  // this.state.title = algo !

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault(); // evita que se recargue la pagina. 
    // this.setState({title: ""});
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;  // hacemos destructuring del estado.
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}  // el state que es el titulo de la pelicula. 
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title}
                </Link>
                < button onClick={() => { this.props.addMovieFavorite({ title: movie.Title, id: movie.imdbID }) }}>Agregar a favoritos</button>
              </li>
            )
            )
          }
        </ul>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded // este es el que se consologuea en las props. (sale un arreglo vacio del estado inicial que definimos en el reducer) 
  };
}

function mapDispatchToProps(dispatch) {
  // devuelve un objeto en donde en cada propiedad
  // le voy a definir el dispatch que quiero que se ejecute
  // si el actionCreator recibe un parametro, lo coloco como tal
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

// export default Buscador;
