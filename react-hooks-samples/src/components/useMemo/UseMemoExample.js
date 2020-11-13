import React, {useEffect, useMemo, useState} from "react";

const UseMemoExample = () => {
  const [name, setName] = useState('apple')
  // useMemo will prevent create names every time when render
  const names = useMemo(() => ['apple', 'peer', 'banana', 'lemon'], []);

  function getProductName() {
    console.log('UseMemoExample -> getProductName')
    return name;
  }
  // [useEffect] will re-render when name has changed
  useEffect(() => {
    console.log('UseMemoExample -> useEffect')
    getProductName()
  }, [name])

  // [useMemo] will render when name has changed
  // [useMemo] shouldComponentUpdate
  const memo_name = useMemo(() => {
    console.log('UseMemoExample -> useMemo')
    // return a function
    return () => name
  }, [name])

  // check console.log for printing sequence
  return (
    <React.Fragment>
      <div className='callback'>
        <p>useEffect change：{getProductName()}</p>
        <p>useMemo change：{memo_name()}</p>
        <button onClick={() => setName(names[Math.random() * names.length << 0])}>get random name</button>
      </div>
    </React.Fragment>
  )
}

export default UseMemoExample;