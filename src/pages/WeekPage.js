import Week from '../components/Week';
import useDaysContext from '../hooks/use-days-context';
import ChoreCreate from '../components/ChoreCreate';
import { DateUtils } from '../helpers';

function WeekPage() {
  const { selectedDay, days, incrementWeek, decrementWeek } = useDaysContext();

  return (
    <div className='week-page'>
      <h1 className='flex text-3xl font-bold justify-center'>{DateUtils.formatDate(days[0])} - {(DateUtils.formatDate(days[6]))}</h1>
      <div className='flex justify-around'>
        <button className='rounded-lg border-solid border-2 border-gray-800' onClick={decrementWeek}>Previous Week</button>
        <button className='rounded-lg border-solid border-2 border-gray-800' onClick={incrementWeek}>Next Week</button>
      </div>
      <Week />
      <div>
        <ChoreCreate date={selectedDay} />
      </div>
    </div>
  );
}

export default WeekPage;