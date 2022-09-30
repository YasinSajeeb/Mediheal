import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
  const {name, description, img, time, seller} = props.exercise;
    return (
        <div>
            <div className="col">
              <div className="card h-100 exercise">
                <div className='p-3'><img src={img} className="card-img-top" alt=""/></div>
      
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h6>Time Required: {time}s</h6>
        <button className='bg-primary px-4 py-2'>Add to list</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Exercise;