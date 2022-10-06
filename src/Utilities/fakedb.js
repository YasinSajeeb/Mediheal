const addToDb = (clickedTime) =>{

    let breakTimeList = {};

    const storedBreakTimeList = localStorage.getItem('Break-Time');
    if(storedBreakTimeList){
        breakTimeList = JSON.parse(storedBreakTimeList);
    }

    const quantity = breakTimeList[clickedTime];
        if(quantity){
            const newQuantity = quantity + 1;
            breakTimeList[clickedTime] = newQuantity;
        }
        else{
            breakTimeList[clickedTime] = 1;
        }
        localStorage.setItem('Break-Time', JSON.stringify(breakTimeList))
    }

const getStoredBreakTime = ()=>{
    let breakTimeList = {};

    const storedBreakTimeList = localStorage.getItem('Break-Time', breakTimeList);
    if(storedBreakTimeList){
        breakTimeList = JSON.parse(storedBreakTimeList);
    }
    return breakTimeList;
}


export {
    addToDb,
    getStoredBreakTime
}

