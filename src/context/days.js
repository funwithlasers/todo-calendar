import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DaysContext = createContext();

function Provider({ children }) {
  const [days, setDays] = useState([]);

  useEffect(() => {

  }, [])

  //  Initially we are going to just fetch chores and assign those to days by id. 
  //
  // const fetchChoresByDay = async (dayId) => {
  //   const response = await axios.get('http://localhost:3001/chores');
  //   const daysChores = response.filter(chore => chore.dayId === dayId);

  //   setChores(response.data);
  // };

  // Even empty days will be show. Unsure why we would ever delete a day.
  //
  // const deleteDayById = async (id) => {
  // };

  //Unsure why we would ever delete a day.
  //
  // const createDay = async (title, dayId) => {
  //   const response = await axios.post('http://localhost:3001/days', {
  //     title,
  //     dayId,
  //   });
  //
  //   const updatedDays = [...days, response.data];
  //   setDays(updatedDays);
  // };

  const valueToShare = {
    days,

  };

  return (
    <DaysContext.Provider value={valueToShare}>
      {children}
    </DaysContext.Provider>
  );
}

export { Provider };
export default DaysContext;
