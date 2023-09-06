import ChoreShow from './ChoreShow';
import useChoresContext from '../hooks/use-chores-context';

function ChoreList() {
  const { chores } = useChoresContext();

  const renderedChores = chores.map((chore) => {
    return <ChoreShow key={chore.id} chore={chore} />;
  });

  return <div className="chore-list">{renderedChores}</div>;
}

export default ChoreList;
