import React from 'react';
import './App.scss';
import UseStateExample from "./components/useState/UseStateExample";
import UseEffectExample from "./components/useEffect/UseEffectExample";
import UseContextExample from "./components/useContext/UseContextExample";
import UseReducerExample from "./components/useReducer/UseReducerExample";
import UseMemoExample from "./components/useMemo/UseMemoExample";

const App = () => {
  return (
    <div className='container'>
      <div className='title'><span>useState sample</span></div>
      <UseStateExample />
      <div className='title'><span>useEffect sample</span></div>
      <UseEffectExample />
      <div className='title'><span>useContext sample</span></div>
      <UseContextExample/>
      <div className='title'><span>useReducer sample</span></div>
      <UseReducerExample/>
      <div className='title'><span>useCallback sample</span></div>
      <UseMemoExample/>
    </div>
  );
}

export default App;
