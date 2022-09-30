import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Accordion from './Accordion/Accordion';

const Exercises = () => {

    const [exercises, setExercises] = useState([]);
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    return (
            <div className="row">
                <div className="col-md-9">
                  <h5 className='mt-5'>Select Your Exercises to maintain your sound health</h5>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        ></Exercise>)
                    }
                </div>
                    <Accordion></Accordion>
                </div>
                <div className="col-md-3">
                    <h3>Mello</h3>
                </div>
            </div>
        
    );
};

export default Exercises;