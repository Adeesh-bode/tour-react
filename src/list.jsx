import React, { useState } from 'react';
import './index.css';

export default function Listing({ name, info, image, price, day }) {
  const [display, setDisplay] = useState(true);
  const [show, setShow] = useState(false);

  function toggleDisplay() {
    setDisplay(!display);
  }

  function showAction() {
    setShow(!show);
  }

  if (display) {
    return (
      <div className="tour">
        <div>
        <div className='price'>{"$"+ price }</div>
        <img src={image} alt={name}></img>
        </div>
        <div className="details">
          <div className='title'>
            <h2>{name}</h2>
            <h3>({day} day's of tour)</h3>
          </div>
          <p>
            {show ? info : info.substring(0, 150) + " ..."}
            <button className="para" onClick={showAction}>
              {show ? "Show Less" : "Show More"}
            </button>
          </p>
          <button className="interest" onClick={toggleDisplay}>Not Interested</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
