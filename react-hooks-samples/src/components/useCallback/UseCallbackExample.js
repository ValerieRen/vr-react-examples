import React, {useCallback, useEffect, useMemo, useState} from "react";

const UseCallbackExample = () => {
  const [name, setName] = useState('apple')
  // useMemo will prevent create names every time when render
  const names = useMemo(() => ['apple', 'peer', 'banana', 'lemon'], []);

  // [useCallback] will re-render when name has changed
  // [useMemo] return value
  const callback_name = useCallback(() => {
    console.log('UseCallbackExample -> useCallback')
    return name;
  }, [name])

  // [useMemo] will render when name has changed
  // [useMemo] shouldComponentUpdate, return function
  const memo_name = useMemo(() => {
    console.log('UseCallbackExample -> useMemo')
    return () => name;
  }, [name])

  // check console.log for printing sequence
  return (
    <React.Fragment>
      {console.log('UseCallbackExample -> render')}
      <div className='callback'>
        <p>useCallback change：{callback_name()}</p>
        <p>useMemo change：{memo_name()}</p>
        <button onClick={() => setName(names[Math.random() * names.length << 0])}>get random name</button>
      </div>
    </React.Fragment>
  )
}

export default UseCallbackExample;