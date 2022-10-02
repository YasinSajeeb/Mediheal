import React from 'react';
import './Exercise.css'
const Exercise = ({exercise, handleAddToList}) => {
  const {name, description, img, time, seller} = exercise;
    return (
        <div>
            <div className="col">
              <div className="card h-100 exercise">
                <div className='p-2'><img src={img} className="card-img-top" alt=""/></div>
      
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Seller: <strong>{seller}</strong> </p>
        
        <p>Time Required: <strong>{time}s</strong></p>
        <button onClick={() => handleAddToList(exercise)} className='bg-primary px-4 py-2'>Add to list</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Exercise;