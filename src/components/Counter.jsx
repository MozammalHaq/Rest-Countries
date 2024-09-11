import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count >= 10) {
      return alert("Ok");
    }
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div>
      <h3>Value: {count}</h3>
      <button onClick={() => increment()}>Click</button>
      <button onClick={() => decrement()}>Click</button>
    </div>
  );
};

export default Counter;
