import { createContext, useState } from 'react';

const DaysContext = createContext();

function DaysProvider({ children }) {
  const [days, setDays] = useState([]);
  const [activeDay, setActiveDay] = useState(new Date());

  const getWeekDays = (date = activeDay) => {
    var sunday = getSunday(date);
    const days = [...Array(7)].map((_, i) => new Date(date.setDate(sunday.getDate()+ i)));

    setDays(days);
  }

  function getSunday(date = activeDay) {
    date = new Date(date);
    var day = date.getDay(),
      diff = date.getDate() - day;

    return new Date(date.setDate(diff));
  }

  const daysContext = {
    days,
    activeDay,
    setActiveDay,
    getWeekDays
  };

  return (
    <DaysContext.Provider value={daysContext}>
      {children}
    </DaysContext.Provider>
  );
}

export { DaysProvider };
export default DaysContext;
