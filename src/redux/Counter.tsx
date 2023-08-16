import { useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <hr />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>

      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        IncrementBy 10
      </button>

      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
      >
        DecrementBy 10
      </button>
    </div>
  );
};
export default Counter;
