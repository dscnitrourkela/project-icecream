import React, { useReducer, useMemo, createContext, useContext } from "react";

// Reducer, Initial State, Types
import canvasReducer from "../reducers/frames.reducer";
import { initialState } from "../actions/frames.action";

const FramesContext = createContext(initialState);

export function FramesCtxProvider(props) {
  /**
   * The useReducer hook provided by React enables you to create
   * global states. Similar to the useState hook, useReducer provides
   * access to the state through is first destructured variable and a
   * function - dispatch to which we pass an object consisting of 2 properites -
   *
   * dispatch({
   * 	type: one of the types from CANVAS_ACTIONS,
   * 	payload: data that we want to send to reducer function to update the state,
   * })
   */
  const [state, dispatch] = useReducer(canvasReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <FramesContext.Provider value={value} {...props} />;
}

/**
 * A very handy custom hook to easily get access to the state and dispatch functions
 * in any component
 *
 * This avoids quite a few steps where you would have to import the above context,
 * useContext hook from react and bunch of other steps.
 *
 * Instead, all you have to do now is import this hook and call it inside a component!
 */
export function useFrames() {
  const context = useContext(FramesContext);
  if (!context)
    throw new Error("useFrames must be used within a FramesCtxProvider");

  const [state, dispatch] = context;
  return [state, dispatch];
}
