import { createContext, useState } from 'react';
import { addDays, startOfWeek, subDays, startOfDay } from 'date-fns';

const DaysContext = createContext();

function DaysProvider({ children }) {
  const [selectedDay, setselectedDay] = useState(startOfDay(new Date()));

  function getWeekDays(date = selectedDay) {
    var weekdays = [...Array(7)];
    var curr = startOfWeek(date);

    weekdays.forEach((_, i) => {
      weekdays[i] = curr;
      curr = addDays(curr, 1);
    });

    return weekdays;
  }

  const [days, setDays] = useState(getWeekDays());

  function incrementselectedDay() {
    var next = addDays(selectedDay, 1);
    setDays(getWeekDays(next));
    setselectedDay(next);
  }

  function decrementselectedDay() {
    var prev = subDays(selectedDay, 1);
    setDays(getWeekDays(prev));
    setselectedDay(prev);
  }


  //Always one week because no adjust active day
  function incrementWeek() {
    var next = addDays(selectedDay, 7);
    setDays(getWeekDays(next));
  }

  function decrementWeek() {
    var prev = subDays(selectedDay, 7);
    setDays(getWeekDays(prev));
  }


  const daysContext = {
    days,
    selectedDay,
    setselectedDay,
    getWeekDays,
    incrementselectedDay,
    decrementselectedDay,
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
