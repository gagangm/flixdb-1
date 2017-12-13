import React from 'react';


const Movie = ({id, title, rating, poster}) => {
    const path = "https://www.netflix.com/search?q=" + title;
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
                <a className="card-button" href={path}>Watch on Netflix</a>
            </div>

        </div>
        
    )
}

export default Movie;