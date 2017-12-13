import React from 'react';
import HeaderLoader from './HeaderLoader';

const LoadingPage = () => (
  <div>
    <HeaderLoader />
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" />
    </div>
  </div>
)

export default LoadingPage;
