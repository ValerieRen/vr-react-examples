import React, {useEffect, useDebugValue, useState} from "react";

// useDebugValue can be used to display a label
// for custom hooks in React DevTools.
const UseDebugValueExample = () => {
  const useDelayedMessage = (msg, delay) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
      setTimeout(() => {
        setMessage(msg);
      }, delay);
    });
    // you will see the message in React DevTools
    useDebugValue(message ? "Message Set" : "Message not set");
    console.log('UseDebugValueExample -> useDelayedMessage');
    return message;
  };

  const delayedMessage = useDelayedMessage("Hello world", 1500);
  return (
    <React.Fragment>
      <div className='layout'>
        {delayedMessage}
      </div>
    </React.Fragment>
  );
}

export default UseDebugValueExample;