import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MoviesList from './MoviesList';

const DashboardPage = () => (
    <div className="container">
      <Header />
      <div className="page-container">
        <MoviesList/>
      </div>
    </div>
);

export default DashboardPage;