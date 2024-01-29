import { createContext, useState } from 'react';
import { addDays, startOfWeek, subDays, startOfDay } from 'date-fns';

const DaysContext = createContext();

function DaysProvider({ children }) {
  const [activeDay, setActiveDay] = useState(startOfDay(new Date()));

  function getWeekDays(date = activeDay) {
    var weekdays = [...Array(7)];
    var sunday = startOfWeek(date);
    var curr = sunday;

    weekdays.forEach((_, i) => {
      weekdays[i] = curr;
      curr = addDays(curr, 1);
    });

    return weekdays;
  }

  const [days, setDays] = useState(getWeekDays());

  function incrementActiveDay() {
    var next = addDays(activeDay, 1);
    setDays(getWeekDays(next));
    setActiveDay(next);
  }

  function decrementActiveDay() {
    var prev = subDays(activeDay, 1);
    setDays(getWeekDays(prev));
    setActiveDay(prev);
  }


  const daysContext = {
    days,
    activeDay,
    setActiveDay,
    getWeekDays,
    incrementActiveDay,
    decrementActiveDay
  };

  return (
    <DaysContext.Provider value={daysContext}>
      {children}
    </DaysContext.Provider>
  );
}

export { DaysProvider };
export default DaysContext;
