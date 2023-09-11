import ChoreShow from './ChoreShow';
import useChoresContext from '../hooks/use-chores-context';

function ChoreList({ date }) {
  const { chores } = useChoresContext();

  const dayChores = (date) => chores.filter(chore => {
    return chore.date === date;
  });

  const renderedChores = dayChores(date).map((chore) => {
    return <ChoreShow key={chore.id} chore={chore} />;
  });

  return <div className='chore-list'>{renderedChores}</div>;
}

export default ChoreList;
