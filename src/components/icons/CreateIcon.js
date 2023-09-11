import { BiSolidPlusCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function CreateIcon() {
  return (
    <IconContext.Provider value={{ color: 'deepskyblue', className: 'complete-icon' }}>
      <div>
        <BiSolidPlusCircle />
      </div>
    </IconContext.Provider>
  );
}

export default CreateIcon;