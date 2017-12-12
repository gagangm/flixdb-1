import React from 'react';

const Header = () => {
    return (
        <div className="header"> 
            <div className="header__content">
                <h1 className="header__title">
                    <span className="red">FLIX</span>
                    <span className="yellow">DB</span>
                </h1>
            </div>
            <div className="header__input">
                <input 
                    className="text-input" 
                    placeholder="Search movies..."
                    type="text">
                </input>
            </div>
        </div>
    )
}

export default Header;