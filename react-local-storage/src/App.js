import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useStateWithLocalStorage(
    'localStorage'
  );
  const [session, setSession] = useStateWithSessionStorage(
    'sessionStorage'
  );
 
  const onChangeLocalStorage = event => setValue(event.target.value);
 
  const onChangeSessionStorage = event => setSession(event.target.value);

  return (
    <div>
      <h1>React with Local Storage!</h1>
 
      <input value={value} type="text" onChange={onChangeLocalStorage} />
 
      <p>{value}</p>

      <h1>React with Session Storage!</h1>
 
      <input value={session} type="text" onChange={onChangeSessionStorage} />

      <p>{session}</p>
    </div>
  );
}

const useStateWithSessionStorage = sessionStorageKey => {
  const [value, setValue] = useState(
    sessionStorage.getItem(sessionStorageKey) || ''
  );
 
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};

export default App;
