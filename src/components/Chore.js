import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';
import IncompleteIcon from './icons/IncompleteIcon'
import CompleteIcon from './icons/CompeteIcon';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';
import logo192 from './logo192.png';


function Chore({ chore }) {
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

  const handleUpdateStatus = () => {
    let status = !chore.status;
    editChoreById(chore.id, chore.title, status, chore.date)
  };

  let statusIcon = () => {
    return chore.status ? (<CompleteIcon />) : (<IncompleteIcon />);
  };

  return (
    <div className='chore-show w-full border-solid border-grey-200 border-2'>
      <div className='flex flex-row'>
        <div>
          <img src={logo192} alt='' width="50" height="50"></img>
        </div>
        <div>
          <div className='chore-title'>
            {content}
          </div>
          <div>
            <button className='chore-status flex flex-row' onClick={handleUpdateStatus}>
              {statusIcon()} {chore.status}
            </button>
          </div>
        </div>
        <div className='chore-menu ml-auto'>
          <button className='chore-edit' onClick={handleCompleteEditClick}>
            <EditIcon />
          </button>
          <button className='chore-delete' onClick={handleDeleteClick}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chore;
