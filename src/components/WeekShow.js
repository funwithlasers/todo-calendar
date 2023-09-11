import DayShow from './DayShow';

function WeekShow() {

  // const tailwindClasses = class('inline');

  return (
    <div className="week-show">
      <h1>WeekName</h1>
      <div className='week-container inline-grid grid-cols-7 gap-4'>
        <DayShow date='9/6/2023' />
        <DayShow date='9/7/2023' />
      </div>
    </div>
  );
}

export default WeekShow;
