import React from 'react';


const onButtonClick = () => {
    console.log('clicked');
}


const Movie = ({id, title, rating, poster}) => {
    return (
        <div className="card-display">
            <div className="card">
                <div className="poster">
                    <img className="card-img" src={ poster }></img>
                </div>
                <div className="card-rating">
                    <h3>{ rating }</h3>
                </div>
                <div className="card-title">
                    <h3>{ title }</h3>
                </div>
                <button className="card-button" onClick={onButtonClick}>Watch on Netflix</button>
            </div>

        </div>
        
    )
}

export default Movie;