import Day from './Day';
import useDaysContext from '../hooks/use-days-context';

function Week() {
  const { days } = useDaysContext();

  var renderedDays = days.map(day => {
    return (
      <div key={day} className='flex-1 p-2'>
        <Day date={day} />
      </div>
    )
  });

  return (
    <>
      <div className='grid grid-cols-7 justify-center'>
        {renderedDays}
      </div>
    </>
  );
}

export default Week;