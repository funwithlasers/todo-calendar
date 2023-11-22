import { createContext, useEffect, useState } from 'react';

const DayContext = createContext();

function Provider({ children }) {
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

  const _daysContext = {
    days,
    activeDay
  };

  return (
    <DayContext.Provider value={_daysContext}>
      {children}
    </DayContext.Provider>
  );
}

export { Provider };
export default DayContext;
