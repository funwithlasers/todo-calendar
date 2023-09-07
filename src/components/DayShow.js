import { useEffect, useContext } from 'react';
import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';
import ChoresContext from '../context/chores';

function DayShow(props) {

  // useEffect(() => {
  //   fetchChoresByDay(props.day);
  // }, []);

  return (
    <div className="day-show">
      <h1>DayOfMonthHere</h1>
      <ChoreList day={props.day}/>
      <ChoreCreate day={props.day}/>
    </div>
  );
}

export default DayShow;
