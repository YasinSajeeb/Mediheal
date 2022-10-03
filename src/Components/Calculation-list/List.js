import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './List.css';

// toast.configure()
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

    const notify = () => toast("Well-done! Stay Safe 😷");

   
    return (
        <div className='sticky-top'>
            <div>
            <h5> Yasin Al Hussain</h5>
            <span className='text-muted'><i class="fa-solid fa-location-dot me-2"></i>Dhaka, Bangladesh</span>
            </div>
            <div className='list-calculation p-2 d-flex justify-content-evenly rounded'>
                <div className='bg-white rounded-circle w-25 text-center'>
                    <h5>55<small className='text-muted'>kg</small></h5>
                    <span>Weight</span>
                </div>
                <div className='bg-white rounded-circle w-25 text-center'>
                    <h5>5.2</h5>
                    <span>Height</span>
                </div>
                <div className='bg-white rounded-circle w-25 text-center'>
                <h5>24<small  className='text-muted'>yrs</small></h5>
                <span>Age</span>
                </div>
            </div>
                    <p className='mt-4'>Selected Exercises: {list.length}</p>
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
                    <div className='text-center'>
                        <button onClick={notify} className='toast-button text-white bg-primary px-4 py-2 rounded'>Activity Completed</button></div>
                    <ToastContainer />
        </div>
    );
};

export default List;