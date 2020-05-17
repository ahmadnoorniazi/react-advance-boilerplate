import produce from 'immer';
import {
  INCREMENT, DECREMENT,
} from './actions';

const initialState = 0;

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case INCREMENT:
      return draft + 1;
    case DECREMENT:
      return draft - 1;
    default:
      return draft;
  }
});
