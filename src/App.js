import React from 'react';
import './App.scss';
import UseStateExample from "./components/useState/UseStateExample";
import UseEffectExample from "./components/useEffect/UseEffectExample";
import UseContextExample from "./components/useContext/UseContextExample";
import UseReducerExample from "./components/useReducer/UseReducerExample";
import UseMemoExample from "./components/useMemo/UseMemoExample";
import UseCallbackExample from "./components/useCallback/UseCallbackExample";
import UseRefExample from "./components/useRef/UseRefExample";
import UseImperativeHandleExample from "./components/useImperativeHandle/UseImperativeHandleExample";
import UseLayoutEffectExample from "./components/useLayoutEffect/UseLayoutEffectExample";

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
      <div className='title'><span>useMemo sample</span></div>
      <UseMemoExample/>
      <div className='title'><span>useCallback sample</span></div>
      <UseCallbackExample/>
      <div className='title'><span>useRef sample</span></div>
      <UseRefExample/>
      <div className='title'><span>useImperativeHandle sample</span></div>
      <UseImperativeHandleExample/>
      <div className='title'><span>useLayoutEffect sample</span></div>
      <UseLayoutEffectExample/>
    </div>
  );
}

export default App;
