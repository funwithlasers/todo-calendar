import { createContext, useState } from 'react';
import axios from 'axios';

const ChoresContext = createContext();

function ChoresProvider({ children }) {
  const [chores, setChores] = useState([]);

  const fetchChores = async () => {
    const response = await axios.get('http://localhost:3001/chores');

    setChores(response.data);
  };

  const editChoreById = async (id, title, status, date) => {
    const response = await axios.put(`http://localhost:3001/chores/${id}`, {
      title,
      status,
      date,
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
    await axios.delete(`http://localhost:3001/chores/${id}`);

    const updatedChores = chores.filter(chore => {
      return chore.id !== id;
    });

    setChores(updatedChores);
  };

  const createChore = async (title, status, date) => {
    const response = await axios.post('http://localhost:3001/chores', {
      title,
      status,
      date,
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
