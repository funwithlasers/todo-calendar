import { createContext, useState } from 'react';
import axios from 'axios';
import { DateUtils } from '../helpers';

const ChoresContext = createContext();

function ChoresProvider({ children }) {
  const [chores, setChores] = useState([]);
  const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone); //I need this now, but it should belong where tz is set in UI.

  const fetchChores = async (id) => {
    const response = await axios.get(`https://192.168.1.146:7010/TodoItems/${id}`);

    const formattedData = response.data.map(item => ({
      ...item,
      dueDate: DateUtils.convertToLocal(item.dueDate, timeZone)
    }));

    setChores(formattedData);
  };

  const editChoreById = async (id, dueDate, title, status) => {
    await axios.put(`http://localhost:7010/TodoItems/${id}`, {
      dueDate: DateUtils.convertToUtc(dueDate, timeZone),
      title,
      status
    });

    fetchChores(1);
  };

  const deleteChoreById = async (id) => {
    await axios.delete(`http://localhost:7010/TodoItems/${id}`);
        
    fetchChores(1);
  };

  const createChore = async (dueDate, title, status) => {
    try {
      await axios.post('https://localhost:7010/TodoItems', {
        dueDate: DateUtils.convertToUtc(dueDate, timeZone),
        title,
        status,
        userId: 1   // TODO: Get id of logged in user
      });
    } catch (error) {
      if (error.response) {
        console.log('Error Response:', error.response);
      } else if (error.request) {
        console.log('Error Request:', error.request);
      } else {
        console.log('Error Message:', error.message);
      }
    }
        
    fetchChores(1);
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
