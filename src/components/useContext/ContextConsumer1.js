import React, {useContext} from 'react';
import {UserContext} from "./ContextProvider";

const ContextConsumer1 = () => {
  const context = useContext(UserContext);
  const user = context.user;
  return (
    <div className="user">
      <div>Component 1 --> </div>
      <div>{user.fullName}:</div>
      <div className="user-info">
        <label><span>Gender: {user.gender}</span></label>
        <label><span>Birthday: {user.birthday}</span></label>
      </div>
    </div>
  );
};

export default ContextConsumer1;