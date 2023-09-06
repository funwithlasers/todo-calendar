import { useEffect, useContext } from 'react';
import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';
import DaysContext from '../context/days';

function DayShow() {
  // const { fetchChoresByDay } = useContext(DaysContext);

  // useEffect(() => {
  //   fetchChoresByDay();
  // }, []);

  return (
    <div className="day-show">
      <h1>DayOfMonthHere</h1>
      <ChoreList />
      <ChoreCreate />
    </div>
  );
}

export default DayShow;
