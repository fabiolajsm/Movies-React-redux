import React from 'react';
import { connect } from 'react-redux';
import './Movie.css';
import getMovieDetail from "../../redux/actions/getMovieDetail";


class Movie extends React.Component {

    componentDidMount() {
        // ya sabemos que el componente fue montado
        // ahora podemos empezar a realizar acciones con el mismo
        // por ejemplo ... consultas con la api ..... entonces puedo invocar a la accion
        // getMovieDetail !
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                {this.props.movie ?
                    <div>
                        <div>
                            <span>
                                Title:
                            </span>
                            <span>
                                {this.props.movie.Title}
                            </span>
                        </div>
                        <img src={this.props.movie.Poster} alt={"img"} />
                    </div>
                    : <h1>Cargando ...</h1>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'stateeeeeeeeeeee');
    return {
        movie: state.movieDetail
    }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
