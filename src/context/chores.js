import { createContext, useState } from 'react';
import axios from 'axios';

const ChoresContext = createContext();

function ChoresProvider({ children }) {
  const [chores, setChores] = useState([]);

  const fetchChores = async (id) => {
    const response = await axios.get(`https://localhost:7010/TodoItems/${id}`);

    const formattedData = response.data.map(item => ({
      ...item,
      dueBy: new Date(item.dueBy)
    }));

    setChores(formattedData);
  };

  const editChoreById = async (id, dueBy, title, status) => {
    const response = await axios.put(`http://localhost:7010/TodoItems/${id}`, {
      dueBy,
      title,
      status
    });

    const updatedChores = chores.map(chore => {
      if (chore.id === id) {
        return { ...chore, ...response.data };
      }

      return chore;
    });

    setChores(updatedChores);
  };

  const deleteChoreById = async (id) => {
    await axios.delete(`http://localhost:7010/TodoItems/${id}`);

    const updatedChores = chores.filter(chore => {
      return chore.id !== id;
    });

    setChores(updatedChores);
  };

  const createChore = async (dueBy, title, status) => {
    const response = await axios.post('https://localhost:7010/TodoItems', {
      dueBy,
      title,
      status,
      userId: 1   // TODO: Get id of logged in user
    });

    const updatedChores = [...chores, response.data];
    setChores(updatedChores);
  };

  const choresContext = {
    chores,
    deleteChoreById,
    editChoreById,
    createChore,
    fetchChores,
  };

  return (
    <ChoresContext.Provider value={choresContext}>
      {children}
    </ChoresContext.Provider>
  );
}

export { ChoresProvider };
export default ChoresContext;
