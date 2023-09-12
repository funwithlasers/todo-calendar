import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';
import CreateIcon from './icons/CreateIcon';
import SaveIcon from './icons/SaveIcon';


function ChoreCreate({ date }) {
  const [title, setTitle] = useState('');
  const { createChore } = useChoresContext();
  const [isCreateChore, setIsCreateChore] = useState(false);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createChore(title, 0, date);
    setTitle('');
    setIsCreateChore(false);
  };

  const handleModal = () => {
    console.log('handleModal triggered');
    setIsCreateChore(!isCreateChore);
  }

  let modal = () => {

    if (isCreateChore) {
      return (
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className='input' value={title} onChange={handleChange} />
          <button className="button">
            <SaveIcon />
          </button>
        </form>
      );
    }
  };

  return (
    <div className='chore-create'>
      <button className='button' onClick={handleModal}>
        <CreateIcon />
      </button>
      {modal()}
    </div>
  );
}

export default ChoreCreate;
