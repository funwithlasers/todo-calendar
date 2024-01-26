import { useContext } from 'react';
import Week from "../components/Week";
import DayContext from '../context/days';

function WeekPage() {
  const { days } = useContext(DayContext);


  return (
    <div className='week-page'>
      <h1 className='relative text-3xl font-bold underline'>{days[0].toLocaleDateString("en-US")} - {days[6].toLocaleDateString("en-US")}</h1>
      <Week />
    </div>
  );
}

export default WeekPage;
