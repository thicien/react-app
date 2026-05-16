import { useDispatch, useSelector } from "react-redux";

import {increment, decrement, incrementByAmount} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector(
    (state: unknown) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  );
}

export default Counter;