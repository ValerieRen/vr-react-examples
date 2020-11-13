import React, {useRef, useEffect, forwardRef, useImperativeHandle} from "react";

const UseImperativeHandleExample = () => {
  const parentRef = useRef();
  const ForwardComponent = forwardRef(ChildComponent);
  const getFocus = (e) => {
    // 2. assign value to parentRef.current.value
    parentRef.current.value(e.target.value);
  }

  useEffect(() => {
    // 1. focus the ref when render
    parentRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <div className='ref'>
        <input type="text" onChange={getFocus}/>
        {/*// 3. forward ref to child component*/}
        <ForwardComponent ref={parentRef}/>
      </div>
    </React.Fragment>
  )
}

const ChildComponent = (props, ref) => {
  const inputRef = useRef();
  // 4. handle forwarded ref
  useImperativeHandle(ref,()=>{
    return {
      inputRef,
      focus(){
        inputRef.current.focus();
      },
      value(text){
        // 5. get assigned value from parent component
        inputRef.current.value = text;
      }
    }
  });
  // 6. value will be shown same as input value from parent component
  return <input ref={inputRef} {...props} />
}

export default UseImperativeHandleExample;