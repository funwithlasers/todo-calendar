import { createContext, useState } from 'react';
import { addDays, startOfWeek, subDays, startOfDay } from 'date-fns';

const DaysContext = createContext();

function DaysProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState(startOfDay(new Date()));
  var dayInScope = selectedDay;

  function getWeekDays(date) {
    var weekdays = [...Array(7)];
    var curr = startOfWeek(date);

    weekdays.forEach((_, i) => {
      weekdays[i] = curr;
      curr = addDays(curr, 1);
    });

    return weekdays;
  }

  const [days, setDays] = useState(getWeekDays());

  function incrementSelectedDay() {
    var next = addDays(selectedDay, 1);
    setDays(getWeekDays(next));
    setSelectedDay(next);
  }

  function decrementSelectedDay() {
    var prev = subDays(selectedDay, 1);
    setDays(getWeekDays(prev));
    setSelectedDay(prev);
  }


  //Always one week because no adjust active day
  function incrementWeek() {
    var next = addDays(dayInScope, 7);
    setDays(getWeekDays(next));
  }

  function decrementWeek() {
    var prev = subDays(dayInScope, 7);
    setDays(getWeekDays(prev));
  }


  const daysContext = {
    days,
    selectedDay,
    setSelectedDay,
    getWeekDays,
    incrementSelectedDay,
    decrementSelectedDay,
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
