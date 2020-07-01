import React, {useState} from "react";

const Colors = ({defaultColor}) => {
  const [color, setColor] = useState(defaultColor);
  return (
    <>
      <div>
        <span>useState sample</span>
      </div>
      <div className='button-group'>
        <button
          className={`button ${color === 'blue' ? 'button-blue' : ''}`}
          onClick={() => setColor('blue')}
        >Blue</button>
        <button
          className={`button ${color === 'pink' ? 'button-pink' : ''}`}
          onClick={() => setColor('pink')}
        >Pink</button>
        <button
          className={`button ${color === 'purple' ? 'button-purple' : ''}`}
          onClick={() => setColor('purple')}
        >Purple</button>
      </div>
    </>
  );
}

export default Colors;