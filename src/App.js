import React from 'react';
import './App.scss';
import Colors from "./components/useState/Colors";
import Count from "./components/useEffect/Count";

const App = () => {
  return (
    <div>
      <Colors />
      <Count />
    </div>
  );
}

export default App;
