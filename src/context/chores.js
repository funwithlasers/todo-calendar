import { createContext, useState } from 'react';
import axios from 'axios';

const ChoresContext = createContext();

function Provider({ children }) {
  const [chores, setChores] = useState([]);

  const fetchChores = async () => {
    const response = await axios.get('http://localhost:3001/chores');

    setChores(response.data);
  };

  // const fetchChoresByDay = async (day) => {
  //   const response = await axios.get('http://localhost:3001/chores');
  //   const dayChores = response.data.filter(chore => chore.day === day);
  //   console.log("fetchChoresByDay: ", chores);
  //   setChores(dayChores);
  // };

  const editChoreById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/chores/${id}`, {
      title: newTitle,
    });

    const updatedChores = chores.map((chore) => {
      if (chore.id === id) {
        return { ...chore, ...response.data };
      }

      return chore;
    });

    setChores(updatedChores);
  };

  const deleteChoreById = async (id) => {
    await axios.delete(`http://localhost:3001/chores/${id}`);

    const updatedChores = chores.filter((chore) => {
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

  const valueToShare = {
    chores,
    deleteChoreById,
    editChoreById,
    createChore,
    fetchChores,
   // fetchChoresByDay,
  };

  return (
    <ChoresContext.Provider value={valueToShare}>
      {children}
    </ChoresContext.Provider>
  );
}

export { Provider };
export default ChoresContext;
