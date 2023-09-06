import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';

function ChoreShow({ chore }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteChoreById } = useChoresContext();

  const handleDeleteClick = () => {
    deleteChoreById(chore.id);
  };

  const handleEditClick = () => {
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
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ChoreShow;
