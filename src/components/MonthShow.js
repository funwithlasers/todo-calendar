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
      <DayShow day='05121999'/>
      <DayShow day='06022000'/>
    </div>
  );
}

export default MonthShow;
