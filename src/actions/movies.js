import * as axios from 'axios';
import imdb_top_250 from '../database/imdb-top-250';

export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    movie
});

export const startLoadingMovieDetails = () => {
    return (dispatch) => {
           imdb_top_250.map((movieID) => {
            return axios.get('http://www.omdbapi.com/?apikey=c4d21bde', {
                params: {
                  i: movieID,
                  plot: 'short',
                  r:'json'
                }
              })
              .then((response) => {
                const movie = {
                    id: response.data.imdbID,
                    title: response.data.Title,
                    rating: response.data.imdbRating,
                    poster: response.data.Poster
                };
                 dispatch(addMovie(movie));
              })
        });
    }
}