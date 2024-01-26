import { useContext, useEffect } from 'react';
import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';
import DayContext from '../context/days';


function Day({ date }) {
  const { activeDay, setActiveDay } = useContext(DayContext);

  return (
    <div className='h-screen'>
      <div className={'relative border-solid border-black border-2 pb-5 h-4/5 ' + (activeDay.toLocaleDateString("en-US") === date ? 'border-cyan-600' : 'border-black')}>
        <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{date}</h1>
        <p>{activeDay.toLocaleDateString("en-US")}</p>
        <ChoreList date={date} />
        <div>
          <ChoreCreate date={date} />
        </div>
      </div>
    </div>
  );
}

export default Day;
