import { useContext } from 'react';
import Week from "../components/Week";
import DayContext from '../context/days';
import ChoreCreate from '../components/ChoreCreate';


function WeekPage() {
  const { days, selectedDay } = useContext(DayContext);


  return (
    <div className='week-page'>
      <h1 className='flex text-3xl font-bold justify-center'>{days[0].toLocaleDateString("en-US")} - {days[6].toLocaleDateString("en-US")}</h1>
      <Week />
      <div>
        <ChoreCreate date={selectedDay.toLocaleDateString("en-US")} />
      </div>
    </div>
  );
}

export default WeekPage;
