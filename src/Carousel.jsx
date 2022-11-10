import React from 'react';

const Carousel = () => {
    return(
        <div className="carousel-container">
            <div className="details">
                <strong>StreamFlix</strong>
                <h1 className="heading">Stranger Things</h1>
                <ul>
                    <li className="like">97% LIKED</li>
                    <li className="year">2020</li>
                    <li className="Parts">4 Parts</li>
                </ul>
                <p className="desc">
                    <b>Watch Part 4 Now</b>
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                    Eleven and her friends up agianst for another adventure. Vecna is their new villain. Watch the series to see if they won
                </p>
            </div>
            <img src="./assets/carousel-image.png" alt="Movie" className="carousel-image" />
        </div>
    );
}

export default Carousel;