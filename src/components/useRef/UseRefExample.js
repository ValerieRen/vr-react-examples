import React, {useRef, useEffect} from "react";

const UseRefExample = () => {
  const inputRef = useRef('');
  const getFocus = (e) => {
    inputRef.current.value = e.target.value;
    console.log('UseRefExample', inputRef.current.value);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <div className='ref'>
        <input ref={inputRef} type="text" onChange={getFocus}/>
      </div>
    </React.Fragment>
  )
}

export default UseRefExample;