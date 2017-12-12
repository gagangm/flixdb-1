import React from 'react';


const onButtonClick = () => {
    console.log('clicked');
}


const Movie = ({id, title, rating, poster}) => {
    return (
        <div class="card-display">
            <div class="card">
                <div class="poster">
                    <img class="card-img" src={ poster }></img>
                </div>
                <div class="card-rating">
                    <h3>{ rating }</h3>
                </div>
                <div class="card-title">
                    <h3>{ title }</h3>
                </div>
                <button class="card-button" onClick={onButtonClick}>Watch on Netflix</button>
            </div>

        </div>
        
    )
}

export default Movie;