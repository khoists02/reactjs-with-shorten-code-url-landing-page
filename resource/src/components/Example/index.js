import React, { useCallback, useState } from 'react';

const Example =()=> {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  // Examples for react hook how to use useCallback in reactjs?
  
  return (
    <div className="example block-site" style={{ marginTop: 50, marginBottom: 50 }}>
      Examples
      <br></br>
      <>
        Count: {count}
        <button className="btn m-r-md" onClick={increment}>+</button>
        <button className="btn m-r-md" onClick={decrement}>-</button>
        <button className="btn" onClick={incrementOtherCounter}>incrementOtherCounter</button>
      </>
    </div>
  )
};

export default Example; 