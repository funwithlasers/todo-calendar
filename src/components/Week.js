import { useState } from 'react';
import Day from './Day';

function Week() {

  const testDays = [
    {
      date: '1/1/2023',
    },
    {
      date: '1/2/2023',
    },
    {
      date: '1/3/2023',
    },
    {
      date: '1/4/2023',
    },
    {
      date: '1/5/2023',
    },
    {
      date: '1/6/2023',
    },
    {
      date: '1/6/2023',
    },
  ]

  const [days, setDays] = useState(testDays);

  const renderedDays = days.map( day => {
    return <Day date={day.date} />
  });

  return (
    <div className='week-container'>
      <div className='flex items-center justify-center'>
       {renderedDays}
      </div>
    </div>
  );
}

export default Week;
