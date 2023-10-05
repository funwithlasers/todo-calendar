import { useState } from "react";

function Input() {
  const [text, setText] = useState();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className='input rounded content-stretch' value={text} onChange={handleChange} />
    </div>
  );
}

export default Input;
