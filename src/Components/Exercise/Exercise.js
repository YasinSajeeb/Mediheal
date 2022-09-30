import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
  const {name, description, img, time, seller} = props.exercise;
    return (
        <div>
            <div className="col">
              <div className="card h-100 exercise">
      <img src={img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Exercise;