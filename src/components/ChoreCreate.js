import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';
import { BiSolidPlusCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons';


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
      <IconContext.Provider value={{ color: 'deepskyblue', className: 'complete-icon' }}>
        <div>
          <BiSolidPlusCircle />
        </div>
      </IconContext.Provider>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}

export default ChoreCreate;
