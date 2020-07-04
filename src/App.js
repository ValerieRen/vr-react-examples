import React from 'react';
import './App.scss';
import Colors from "./components/useState/Colors";
import Count from "./components/useEffect/Count";
import ContextProvider from "./components/useContext/ContextProvider";

const App = () => {
  return (
    <div>
      <Colors />
      <Count />
      <ContextProvider/>
    </div>
  );
}

export default App;
