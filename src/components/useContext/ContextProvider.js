import React from 'react';
import ContextConsumer1 from "./ContextConsumer1";
import ContextConsumer2 from "./ContextConsumer2";

export const UserContext = React.createContext();

// UserContext object can shared to all the child components inside of UserContext.Provider
const ContextProvider = () => {
  const userState = {
    user: {
      fullName: 'First Last',
      gender: 'Female',
      birthday: '2000/01/01',
      major: 'Computer science',
      degree: 'Master',
    }
  };

  return (
    <React.Fragment>
      <UserContext.Provider value={userState}>
        <ContextConsumer1 />
        <ContextConsumer2 />
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default ContextProvider;