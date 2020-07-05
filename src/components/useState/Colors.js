import React, {useState} from "react";

const Colors = ({defaultColor}) => {
  const [color, setColor] = useState(defaultColor);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Colors;