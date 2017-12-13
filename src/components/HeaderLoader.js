import React from 'react';
import  FilterInput  from './FilterInput';

const HeaderLoader = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__content">
                    <div className="header__image">
                        <img src="images/favicon.svg" />
                    </div>
                    <h1 className="header__title">
                        <span className="red">FLIX</span>
                        <span className="yellow">DB</span>
                    </h1>
                </div>
                <div className="header__input">
                    <input 
                        type="text"
                        className="text-input" 
                        placeholder="Search movies..."
                    >
                    </input>
                </div>
            </div>
        </div>
    )
}

export default HeaderLoader;