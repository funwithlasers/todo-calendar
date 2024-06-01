import Chore from './Chore';
import useChoresContext from '../hooks/use-chores-context';
import { DateUtils } from '../helpers';

function ChoreList({ date }) {
  const { chores } = useChoresContext();

  const dayChores = (date) => chores.filter(chore => {
    return DateUtils.isSameDay(date, chore.dueDate);
  });

  const renderedChores = dayChores(date).map((chore) => {
    return <Chore key={chore.todoItemId} chore={chore} />;
  });

  return <div className='chore-list'>{renderedChores}</div>;
}

export default ChoreList;
