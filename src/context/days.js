import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DaysContext = createContext();

function Provider({ children }) {
  const [days, setDays] = useState([]);

  const getToday = () => {
    return new Date().toLocaleDateString();
  };

  const [activeDay, setActiveDay] = useState(getToday());

  const fetchDaysByMonth = async (date) => {
    const response = await axios.get('http://localhost:3001/days');
    const days = response.data.filter(day => day.getFullYear() === date.getFullYear());

    setDays(days);
  };

  const valueToShare = {
    days,
    activeDay,
    fetchDaysByMonth
  };

  return (
    <DaysContext.Provider value={valueToShare}>
      {children}
    </DaysContext.Provider>
  );
}

export { Provider };
export default DaysContext;
