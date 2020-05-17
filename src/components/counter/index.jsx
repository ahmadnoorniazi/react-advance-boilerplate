import React from 'react';
import {
  INCREMENT, DECREMENT,
} from './actions';
import { useStore } from '../../store';

export default function Counter() {
  const [state, dispatch] = useStore();

  return (
    <div>
      <h2>Global Counter</h2>
      <h3>{state.counter}</h3>
      <button type="button" onClick={() => dispatch({ type: INCREMENT })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: DECREMENT })}>
        Decrement
      </button>
    </div>
  );
}
