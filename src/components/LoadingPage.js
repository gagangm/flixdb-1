import React from 'react';
import Header from './Header';


const LoadingPage = () => (
  <div>
    <Header />
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" />
    </div>
  </div>
)

export default LoadingPage;
