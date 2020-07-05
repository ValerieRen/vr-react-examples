import React, {useContext} from "react";
import {UserContext} from "./UseContextExample";

const ContextConsumer2 = () => {
  const context = useContext(UserContext);
  const user = context.user;
  return (
    <div className="user">
      <div>Component 2 --></div>
      <div>{user.fullName}:</div>
      <div className="user-info">
        <label><span>Major: {user.major}</span></label>
        <label><span>Degree: {user.degree}</span></label>
      </div>
    </div>
  );
};

export default ContextConsumer2;