import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MoviesList from './MoviesList';
import imdb_top_250 from '../database/imdb-top-250';
import loadMovieDetails from '../database/create-list';

const DashboardPage = () => (
    <div className="container">
      <Header />
      <div className="page-container">
        <MoviesList/>
      </div>
    </div>
);

export default DashboardPage;