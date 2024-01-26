import { useContext, useEffect } from 'react';
import Day from './Day';
import DayContext from '../context/days';

function Week() {

  const { days, incrementActiveDay, decrementActiveDay, getWeekDays } = useContext(DayContext);

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
      <button onClick={incrementActiveDay}>inc</button>
      <button onClick={decrementActiveDay}>dec</button>
      <div className='grid grid-cols-7 justify-center'>
        {renderedDays}
      </div>
    </>
  );
}

export default Week;
