import React from 'react';
import './ShowMovies.css';

const ShowMovies = () => {
    return (
      <div className="show">
        <div className="show__title--wrapper">
          <h3 className="show__title">Search results for:</h3>
        </div>
        <section className="show__movies--wrapper">
          <div className="show__card">
            <div className="show__card--title">
              <h2>Title</h2>
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>imdbID:</strong> ttsomenums              
            </p>
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>
            <p className='show__para'>
                <strong>Year:</strong> 2024
            </p>            
          </div>
        </section>
      </div>
    );
}

export default ShowMovies;