import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ShowMovies.css';

const ShowMovies = () => {
    const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
    const [loading, setLoading] = useState(true)
    // const [data, setData] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`https://www.omdbapi.com/?s=die&apikey=${apiKey}`);
    //       setData(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);        
    //     };
    //   }
    //   fetchData();
    // }, []);

    return (
      <div className="show">
        <div className="show__title--wrapper">
          <h3 className="show__title">Search results for:</h3>
        </div>
        <section className="show__movies--wrapper">
          {loading
            ? Array.from({ length: 6}, (_, index) => <SkeletonMovie key={index} />)
            :
          (<>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div>
          <div className="show__card">
            <div className="show__card--title">              
              <div className="card__overlay">More Info</div>
            </div>
            <p className='show__para'>
                <strong>Title:</strong> someshow              
            </p>            
            <p className='show__para'>
              <strong>Type:</strong> Movie
            </p>                      
          </div> </>)
          }
        </section>
      </div>
    );
}

const SkeletonMovie = () => (
  <div className="show__card skeleton">
    <div className="show__card--title skeleton-title"></div>
    <p className='show__para skeleton-para'></p>
    <p className='show__para skeleton-para'></p>
  </div>
);

export default ShowMovies;