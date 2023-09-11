import { BiCheckCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function CompleteIcon() {
  return (
    <IconContext.Provider value={{ color: 'green', className: 'complete-icon' }} >
      <div>
        <BiCheckCircle />
      </div>
    </IconContext.Provider>
  );
}

export default CompleteIcon;