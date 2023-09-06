import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';

function ChoreCreate() {
  const [title, setTitle] = useState('');
  const { createChore } = useChoresContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createChore(title);
    setTitle('');
  };

  return (
    <div className="chore-create">
      <h3>Add a Chore</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default ChoreCreate;
