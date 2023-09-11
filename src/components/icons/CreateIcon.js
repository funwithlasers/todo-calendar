import { BiSolidPlusCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function CreateIcon({ onClick }) {
  return (
    <IconContext.Provider value={{ color: 'deepskyblue', className: 'complete-icon' }}>
      <div>
        <BiSolidPlusCircle onClick={onClick}/>
      </div>
    </IconContext.Provider>
  );
}

export default CreateIcon;