import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';
import IncompleteIcon from './icons/IncompleteIcon'
import CompleteIcon from './icons/CompeteIcon';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';


function Chore({ chore }) {
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState(false);
  const { deleteChoreById, editChoreById } = useChoresContext();

  const handleDeleteClick = () => {
    deleteChoreById(chore.id);
  };

  // move to context fo save data
  const handleCompleteEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleChange = (event) => { 
    setTitle(event.target.value);
  }

  let content = <h3>{chore.title}</h3>;
  if (showEdit) {
    content = <ChoreEdit onSubmit={handleSubmit} chore={chore} />;
  }

  const handleUpdateStatus = () => {
    let status = !chore.status;
    editChoreById(chore.id, chore.title, status, chore.date)
  };

  let statusIcon = () => {
    return chore.status ? (<CompleteIcon />) : (<IncompleteIcon />);
  };

  return (
    <div className='chore-show-container'>
      <div className='chore-show flex flex-row w-full'>
        <button className='chore-status pr-1' onClick={handleUpdateStatus}>
          {statusIcon()}
        </button>
        <div className='h-7 flex-1 min-w-fit pr-2'>{content}</div>
        <button className='chore-edit' onClick={handleCompleteEditClick}>
          <EditIcon />
        </button>
        <button className='chore-delete' onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Chore;
