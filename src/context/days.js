import { createContext, useState } from 'react';
import { addDays, startOfWeek, subDays, startOfDay } from 'date-fns';

const DaysContext = createContext();

function DaysProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState(startOfDay(new Date()));
  const [dayInScope, setDayInScope] = useState(selectedDay);

  function getWeekDays(date) {
    var weekdays = [...Array(7)];
    var curr = startOfWeek(date);

    weekdays.forEach((_, i) => {
      weekdays[i] = curr;
      curr = addDays(curr, 1);
    });

    return weekdays;
  }

  const [days, setDays] = useState(getWeekDays(dayInScope));

  function incrementWeek() {
    const next = addDays(dayInScope, 7);
    setDayInScope(next);
    setDays(getWeekDays(next));
  }

  function decrementWeek() {
    const prev = subDays(dayInScope, 7);
    setDayInScope(prev);
    setDays(getWeekDays(prev));
  }

  const daysContext = {
    days,
    selectedDay,
    setSelectedDay,
    getWeekDays,
    incrementWeek,
    decrementWeek
  };

  return (
    <DaysContext.Provider value={daysContext}>
      {children}
    </DaysContext.Provider>
  );
}

export { DaysProvider };
export default DaysContext;
