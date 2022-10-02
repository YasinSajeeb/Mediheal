import React, { useState } from 'react';
import './List.css'
const List = ({list}) => {
    let total = 0;
    for(const exercise of list){
        total = total + exercise.time;
    }
   
    const [breakTime, setBreakTime] = useState([0]);
    const addBreakTime = (clickedTime)=>{
        setBreakTime(clickedTime);
    }

    let fullTotal = [];
    fullTotal = total+ JSON.parse(breakTime) ;
   
    
    // const fullTotal = total + breakTime;
    return (
        <div className='sticky-top'>
            <h3>Exercise Details</h3>
                    <p>Selected Exercises: {list.length}</p>
                    <h6>Add A Break</h6>
                    <div className='list-calculation p-2 d-flex justify-content-evenly rounded'>
                        <button onClick={()=>addBreakTime(30)}>30s</button>
                        <button onClick={()=>addBreakTime(45)}>45s</button>
                        <button onClick={()=>addBreakTime(60)}>60s</button>
                        <button onClick={()=>addBreakTime(90)}>90s</button>
                        <button onClick={()=>addBreakTime(120)}>120s</button>
                    </div>
                    <div className='list-calculation my-4 p-2 d-flex justify-content-between align-items-center rounded'>
                        <h6>Exercise Time:</h6>
                        <p>{total} seconds</p>
                    </div>

                    <div className='list-calculation p-2 d-flex justify-content-between align-items-center rounded'>
                        <h6>Break Time:</h6>
                        <p>{breakTime} seconds</p>
                    </div>

                    <div className="list-calculation my-4 p-2 d-flex justify-content-between align-items-center rounded">
                        <h6>Total Time:</h6>
                        <p>{fullTotal} seconds</p>
                    </div>
                    <div className='text-center'><button className='toast-button text-white bg-primary px-4 py-2 rounded'>Activity Completed</button></div>
                    {/* <button className='toast-button text-white bg-primary px-4 py-2 rounded'>Activity Completed</button> */}
        </div>
    );
};

export default List;