import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

const MoviesList = (props) => {
    return (
        <div>
            <div className="page-content-header">
                <h2 className="">Best of IMDB on Netflix
                    <span>50 of the best rated movies of all time you can watch on Netflix</span>
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
      movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList);