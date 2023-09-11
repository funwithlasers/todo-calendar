import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';

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
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  );
}

export default ChoreEdit;
