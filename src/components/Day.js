import ChoreCreate from './ChoreCreate';
import ChoreList from './ChoreList';

function Day({ date }) {

  return (
    <div className='h-screen'>
      <div className='relative border-solid border-2 border-black pb-5 h-4/5'>
        <h1 className='text-3xl font-bold text-white border-b-2 border-black bg-black'>{date}</h1>
        <ChoreList date={date} />
        <div>
          <ChoreCreate date={date} />
        </div>
      </div>
    </div>
  );
}

export default Day;
