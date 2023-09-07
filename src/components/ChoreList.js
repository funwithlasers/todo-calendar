import { useEffect, useState } from 'react';
import ChoreShow from './ChoreShow';
import useChoresContext from '../hooks/use-chores-context';

function ChoreList({ day }) {
  const { chores, setChores } = useChoresContext();
  //const [ dayChores, setDayChores] = useState([]);

  // useEffect(() => {
  //   fetchChoresByDay('05121999');
  // }, [chores]);

  const dayChores = (day) => chores.filter(chore => {
    return chore.day === day;
  });

  const renderedChores = dayChores(day).map((chore) => {
    return <ChoreShow key={chore.id} chore={chore} />;
  });

  return <div className="chore-list">{renderedChores}</div>;
}

export default ChoreList;
