import DayShow from './DayShow';

function WeekShow() {

  return (
    <div className="week-show">
      <h1>WeekName</h1>
      <DayShow date='9/6/2023'/>
      <DayShow date='9/7/2023'/>
    </div>
  );
}

export default WeekShow;
