import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';
import SaveIcon from './icons/SaveIcon';

function ChoreEdit({ chore, onSubmit }) {
  const [title, setTitle] = useState(chore.title);
  const { editChoreById } = useChoresContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editChoreById(chore.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className='chore-edit'>
      <div className='flex'>
        <input className='input border-solid border-1' value={title} onChange={handleChange} />
        <button className='button pl-1'>
          <SaveIcon />
        </button>
      </div>
    </form>
  );
}

export default ChoreEdit;
