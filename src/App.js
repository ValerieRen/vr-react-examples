import React from 'react';
import './App.scss';
import Colors from "./components/useState/Colors";
import SearchMovies from "./components/useEffect/SearchMovies";
import ContextProvider from "./components/useContext/ContextProvider";
import Counter from "./components/useReducer/Counter";

const App = () => {
  return (
    <div className='container'>
      <div className='title'><span>useState sample</span></div>
      <Colors />
      <div className='title'><span>useEffect sample</span></div>
      <SearchMovies />
      <div className='title'><span>useContext sample</span></div>
      <ContextProvider/>
      <div className='title'><span>useReducer sample</span></div>
      <Counter/>
    </div>
  );
}

export default App;
