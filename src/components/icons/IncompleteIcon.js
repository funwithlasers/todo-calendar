import { BiCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function IncompleteIcon() {
  return (
    <IconContext.Provider value={{ color: 'red', className: 'complete-icon' }} >
      <div>
        <BiCircle />
      </div>
    </IconContext.Provider>
  );
}

export default IncompleteIcon;