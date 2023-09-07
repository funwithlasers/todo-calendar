import { useEffect } from 'react';
import DayShow from './DayShow';
import useDaysContext from '../hooks/use-days-context';

function MonthShow() {
//  const { fetchDaysByMonth, activeDay } = useDaysContext();

  useEffect(() => {
  //  fetchDaysByMonth();
  }, []);

  return (
    <div className="month-show">
      <h1>MonthName</h1>
      <DayShow date='9/6/2023'/>
      <DayShow date='9/7/2023'/>
    </div>
  );
}

export default MonthShow;
