import { useState } from 'react';
import ChoreEdit from './ChoreEdit';
import useChoresContext from '../hooks/use-chores-context';
import { BiCircle, BiCheckCircle, BiEdit, BiTrash } from 'react-icons/bi';
import { IconContext } from "react-icons";



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
    if (chore.status) return (
      <IconContext.Provider value={{ color: "green", className: "complete-icon" }}>
        <div>
          <BiCheckCircle />
        </div>
      </IconContext.Provider>);

    return (
      <IconContext.Provider value={{ color: "red", className: "incomplete-icon" }}>
        <div>
          <BiCircle />
        </div>
      </IconContext.Provider>
    );
  };

  return (
    <div className="chore-show-container">
      <div className="chore-show inline-flex gap-2">
        <button className="chore-status" onClick={handleUpdateStatusClick}>
          {statusIcon()}
        </button>
        <div>{content}</div>
        <button className="chore-edit" onClick={handleCompleteEditClick}>
          <BiEdit />
        </button>
        <button className="chore-delete" onClick={handleDeleteClick}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
}

export default ChoreShow;
