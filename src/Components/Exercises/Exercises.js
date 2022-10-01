import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Accordion from './Accordion/Accordion';

const Exercises = () => {

    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    const handleAddToList = (exercise) => {
        console.log(exercise);
        const newList = [...list, exercise]
        setList(newList);
    }
    return (
            <div className="row">
                <div className="col-md-9 ps-4">
                  <h5 className='mt-5'>Select Your Exercises to maintain your sound health</h5>
                <div class="row row-cols-1 row-cols-md-3 g-3">
                    {
                        exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToList={handleAddToList}
                        ></Exercise>)
                    }
                </div>
                    <Accordion></Accordion>
                </div>
                <div className="col-md-3 pt-5 ps-4">
                    <h3>Mello</h3>
                    <p>Selected Exercises: {list.length}</p>
                </div>
            </div>
        
    );
};

export default Exercises;