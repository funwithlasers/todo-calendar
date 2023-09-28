import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';

function Day({ date }) {

  return (
    <div className='day-container'>
      <div className='border-solid border-2 border-black pb-5'>
        <h1 className='text-3xl font-bold underline'>{date}</h1>
        <ChoreList date={date} />
        <div className='float-right'>
          <ChoreCreate date={date} />
        </div>
      </div>
    </div>
  );
}

export default Day;
