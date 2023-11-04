import React  from 'react';
import './index.css';
import Listing from './list';
import data from './data.js'

export default function App() {
  return (
    <div className='app'>
      <h1>Our Tours</h1>
      <div className='tours'>
      {
        data.map((tour)=>
        (
          <Listing  key={ tour.id} name={tour.name} info={ tour.info } price={ tour.price } image={ tour.image } day={ tour.days }/>
          )) // arrow function return karenge with iteration
        }
      </div>
    </div>
  );
}


