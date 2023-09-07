import { useEffect, useContext } from 'react';
import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';
import ChoresContext from '../context/chores';

function DayShow({ date }) {

  // useEffect(() => {
  //   fetchChoresByDay(props.day);
  // }, []);

  return (
    <div className="day-show">
      <h1>DayOfMonthHere</h1>
      <ChoreList date={date}/>
      <ChoreCreate date={date}/>
    </div>
  );
}

export default DayShow;
