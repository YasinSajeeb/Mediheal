import React, { useEffect, useState } from 'react';
import List from '../Calculation-list/List';
import Exercise from '../Exercise/Exercise';
import Accordion from './Accordion/Accordion';
import './Exercises.css';

const Exercises = () => {

    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() =>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])
    
    const handleAddToList = (exercise) => {
        // console.log(exercise);
        const newList = [...list, exercise]
        setList(newList);
    }
    
    return (
            <div className="row">
                <div className="col-md-9 ps-4">
                  <h5 className='mt-5'>Select Your Exercises to maintain your sound health</h5>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
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
                <div className="col-md-2 col-lg-3 pt-5 ps-2">
                    <List list={list}
                    ></List>
                </div>
            </div>
        
    );
};

export default Exercises;