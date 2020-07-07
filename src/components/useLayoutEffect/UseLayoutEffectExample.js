import React, {useEffect, useLayoutEffect, useState} from "react";

const UseLayoutEffectExample = () => {
  // useEffect function is called after the DOM mutations are painted
  useEffect(() => {
    console.log('UseLayoutEffectExample -> render useEffect');
  }, []);

  // useLayoutEffect print things before useEffect
  // useLayoutEffect function is triggered synchronously,
  // before the DOM mutations are painted
  useLayoutEffect(() => {
    console.log('UseLayoutEffectExample -> render useLayoutEffect');
  }, []);


  return (
    <div/>
  );
}

export default UseLayoutEffectExample;