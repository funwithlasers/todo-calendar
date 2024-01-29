import { useContext, useEffect } from 'react';
import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';
import DayContext from '../context/days';
import { formatDate, toDate } from 'date-fns';


function Day({ date }) {
  const { activeDay, setActiveDay } = useContext(DayContext);

  return (
    <div className='h-screen'>
      <div onClick={()=>{setActiveDay(toDate(date))}} className={'relative border-solid border-black border-2 pb-5 h-4/5 ' + (activeDay.toLocaleDateString("en-US") === date ? 'border-cyan-600' : 'border-black')}>
      <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{formatDate(date, 'EEEE')}</h1>
      <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{formatDate(date, 'MMMM')} {formatDate(date, 'do')}</h1>
        <ChoreList date={date} />
        <div>
          <ChoreCreate date={date} />
        </div>
      </div>
    </div>
  );
}

export default Day;
