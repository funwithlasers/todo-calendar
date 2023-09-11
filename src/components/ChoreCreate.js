import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';
import CreateIcon from './icons/CreateIcon';


function ChoreCreate({ date }) {
  const [title, setTitle] = useState('');
  const { createChore } = useChoresContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createChore(title, 0, date);
    setTitle('');
  };

  return (
    <div className='chore-create'>
      <CreateIcon />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}

export default ChoreCreate;
