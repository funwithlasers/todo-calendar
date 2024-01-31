import { useContext, useEffect } from 'react';
import Day from './Day';
import DayContext from '../context/days';

function Week() {

  const { days, incrementselectedDay, decrementselectedDay, getWeekDays } = useContext(DayContext);

  getWeekDays();

  var renderedDays = days.map(day => {
    return (
      <div key={day.toLocaleDateString("en-US")} className='flex-1 p-2'>
        <Day date={day.toLocaleDateString("en-US")} />
      </div>
    )
  });

  return (
    <>
      <div className='flex justify-around'>
        <button className='rounded-lg border-solid border-2 border-gray-800' onClick={decrementselectedDay}>Previous Day</button>
        <button className='rounded-lg border-solid border-2 border-gray-800' onClick={incrementselectedDay}>Next Day</button>
      </div>
      <div className='grid grid-cols-7 justify-center'>
        {renderedDays}
      </div>
    </>
  );
}

export default Week;
