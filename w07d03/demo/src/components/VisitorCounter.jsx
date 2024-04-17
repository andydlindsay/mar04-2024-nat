import {useState} from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  // stale state => the variable that represents state no longer holds the latest value
  const clickHandler = () => {
    // setCount(count + 1);
    // setCount(0 + 1);
    // setCount(0 + 1);

    setCount(prev => prev + 1);
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter</h2>
      <h2>Count: {count}</h2>
      <button onClick={clickHandler}>Increment!</button>
    </div>
  );
};

export default VisitorCounter;
