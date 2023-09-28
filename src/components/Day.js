import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';

function Day({ date }) {

  return (
    <div className='day-container flex-1 p-2'>
      <div className='border-solid border-2 border-black'>
        <h1 className='text-3xl font-bold underline'>{date}</h1>
        <ChoreList date={date} />
        <ChoreCreate date={date} />
      </div>
    </div>

  );
}

export default Day;
