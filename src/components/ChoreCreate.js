import { useState } from 'react';
import useChoresContext from '../hooks/use-chores-context';
import useDaysContext from '../hooks/use-days-context';
import CreateIcon from './icons/CreateIcon';
import SaveIcon from './icons/SaveIcon';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function ChoreCreate({ date, chore }) {
  const [title, setTitle] = useState('');
  const { createChore, editChoreById } = useChoresContext();
  const { selectedDay } = useDaysContext();
  const [showModal, setShowModal] = useState(false);
  const [choreDate, setChoreDate] = useState(date);


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (chore != null) {
      editChoreById(chore.id, chore.dueDate, chore.title, chore.status);
    } 
    else {
      createChore(choreDate, title, "Incomplete");
    }
    setTitle('');
    setShowModal(false);
  };


  const handleCreateChoreClick = () => {
    setChoreDate(selectedDay);
    setShowModal(true);
  };

  const handleClose = () => {
    setTitle('');
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose}>
        Cancel
      </button>
      <button onClick={handleSubmit}>
        <SaveIcon />
      </button>
    </div>
  );

  let addChore = () => {
    return (
      <div>
        <div className='border-black'>
          <DatePicker
            //showIcon
            selected={choreDate}
            onChange={(date) => setChoreDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className='input' value={title} onChange={handleTitleChange} />
        </form>
      </div>

    );
  };

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {addChore()}
    </Modal>
  );

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Open Modal
  //     </button>
  //     {showModal && modal}
  //     </div>
  //     );

  // const handleModal = () => {
  //   setIsCreateChore(!isCreateChore);
  // };



  return (
    <div className='chore-create'>
      <button className='button absolute bottom-1 right-1' onClick={handleCreateChoreClick}>
        <CreateIcon />
      </button>
      {showModal && modal}
    </div>
  );
}

export default ChoreCreate;
