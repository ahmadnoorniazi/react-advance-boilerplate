import React, {
  createContext, useContext, useReducer, useEffect,
} from 'react';
import reducer from 'reducer';

export const Context = createContext({});
Context.displayName = 'Store';

const combinedReducers = (state = {}, action = {}) => Object.assign(
  {},
  ...Object.keys(reducer).map((k) => ({ [k]: reducer[k](state[k], action) })),
);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(
    combinedReducers,
    combinedReducers(JSON.parse(localStorage.getItem('state')) || {}),
  );
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export const useStore = () => useContext(Context);
