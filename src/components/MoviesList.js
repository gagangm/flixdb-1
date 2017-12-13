import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import selectMovies from '../selector/movies';

const MoviesList = (props) => {
    return (
        <div>
            <div className="page-content-header">
                <h2 className="">Best of IMDB on Netflix
                    <span>Best rated movies of all time you can watch on Netflix</span>
                </h2>
            </div>
            <div className="page-content">
            {
                
                props.movies.map((movie) =>
                <Movie key={movie.id} {...movie}/>
                )
                    
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      movies: selectMovies(state.movies, state.filter),
      filter: state.filter
    }
}

export default connect(mapStateToProps)(MoviesList);