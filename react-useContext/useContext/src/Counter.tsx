import { ReactNode } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <>
      <div>{children(count)}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleTextInput} />
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default Counter;
