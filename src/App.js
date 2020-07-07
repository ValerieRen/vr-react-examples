import React, {useState} from 'react';
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
  const [show, setShow] = useState('');
  const handleShowExample = value => {
    setShow(value)
  }

  return (
    <div className='container'>
      <h2>Please click on the title of the sample you want to checkout with</h2>
      <div className='title' onClick={() => handleShowExample('useState')}><span>useState sample</span></div>
      {show === 'useState' ? <UseStateExample /> : null}
      <div className='title' onClick={() => handleShowExample('useEffect')}><span>useEffect sample</span></div>
      {show === 'useEffect' ? <UseEffectExample /> : null}
      <div className='title' onClick={() => handleShowExample('useContext')}><span>useContext sample</span></div>
      {show === 'useContext' ? <UseContextExample/> : null}
      <div className='title' onClick={() => handleShowExample('useReducer')}><span>useReducer sample</span></div>
      {show === 'useReducer' ? <UseReducerExample/> : null}
      <div className='title' onClick={() => handleShowExample('useMemo')}><span>useMemo sample</span></div>
      {show === 'useMemo' ? <UseMemoExample/> : null}
      <div className='title' onClick={() => handleShowExample('useCallback')}><span>useCallback sample</span></div>
      {show === 'useCallback' ? <UseCallbackExample/> : null}
      <div className='title' onClick={() => handleShowExample('useRef')}><span>useRef sample</span></div>
      {show === 'useRef' ? <UseRefExample/> : null}
      <div className='title' onClick={() => handleShowExample('useImperativeHandle')}><span>useImperativeHandle sample</span></div>
      {show === 'useImperativeHandle' ? <UseImperativeHandleExample/> : null}
      <div className='title' onClick={() => handleShowExample('useLayoutEffect')}><span>useLayoutEffect sample</span></div>
      {show === 'useLayoutEffect' ? <UseLayoutEffectExample/> : null}
    </div>
  );
}

export default App;
