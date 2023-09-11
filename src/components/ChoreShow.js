import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';
import IncompleteIcon from './icons/IncompleteIcon'
import CompleteIcon from './icons/CompeteIcon';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';


function ChoreShow({ chore }) {
  const [showEdit, setShowEdit] = useState(false);
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

  let content = <h3>{chore.title}</h3>;
  if (showEdit) {
    content = <ChoreEdit onSubmit={handleSubmit} chore={chore} />;
  }

  const handleUpdateStatusClick = () => {
    let status = !chore.status;
    editChoreById(chore.id, chore.title, status, chore.date)
  };

  let statusIcon = () => {
    if (chore.status) return (<CompleteIcon />);
    return (<IncompleteIcon />);
  };

  return (
    <div className='chore-show-container'>
      <div className='chore-show inline-flex gap-2'>
        <button className='chore-status' onClick={handleUpdateStatusClick}>
          {statusIcon()}
        </button>
        <div>{content}</div>
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

export default ChoreShow;
