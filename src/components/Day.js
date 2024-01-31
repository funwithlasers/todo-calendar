import ChoreList from './ChoreList';
import useDaysContext from '../hooks/use-days-context';
import { formatDate, toDate } from 'date-fns';


function Day({ date }) {
  const { selectedDay, setSelectedDay } = useDaysContext();

  return (
    <div className='h-screen'>
      <div onClick={()=>{setSelectedDay(toDate(date))}} className={'relative border-solid pb-5 h-4/5 ' + (selectedDay.toLocaleDateString("en-US") === date ? 'border-cyan-600 border-4' : 'border-black border-2')}>
      <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{formatDate(date, 'EEEE')}</h1>
      <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{formatDate(date, 'MMMM')} {formatDate(date, 'do')}</h1>
        <ChoreList date={date} />
      </div>
    </div>
  );
}

export default Day;
