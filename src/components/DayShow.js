import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';

function DayShow({ date }) {

  return (
    <div className="day-show">
      <h1 className='text-3xl font-bold underline'>{date}</h1>
      <ChoreList date={date}/>
      <ChoreCreate date={date}/>
    </div>
  );
}

export default DayShow;
