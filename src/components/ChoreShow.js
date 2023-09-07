import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';

function ChoreShow({ chore }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteChoreById } = useChoresContext();

  const handleDeleteClick = () => {
    deleteChoreById(chore.id);
  };

  // move to context fo save data
  const handleCompleteClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{chore.title}</h3>;
  if (showEdit) {
    content = <ChoreEdit onSubmit={handleSubmit} chore={chore} />;
  }

  return (
    <div className="chore-show">
      <img alt="chores" src={`https://picsum.photos/seed/${chore.id}/300/200`} />
        <button className="chore-status" onClick={handleCompleteClick}>
          {chore.status}
        </button>
        <div>{content}</div>
        <button className="chore-edit" onClick={handleCompleteClick}>
          Edit
        </button>
        <button className="chore-delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
  );
}

export default ChoreShow;
