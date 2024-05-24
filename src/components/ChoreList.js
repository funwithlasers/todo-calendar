import Chore from './Chore';
import useChoresContext from '../hooks/use-chores-context';
import { isSameDay } from 'date-fns';

function ChoreList({ date }) {
  const { chores } = useChoresContext();

  const dayChores = (date) => chores.filter(chore => {
    return isSameDay(date, chore.dueBy);
  });

  const renderedChores = dayChores(date).map((chore) => {
    return <Chore key={chore.todoItemId} chore={chore} />;
  });

  return <div className='chore-list'>{renderedChores}</div>;
}

export default ChoreList;
