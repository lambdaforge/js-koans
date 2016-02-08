import {Map, Stack} from 'immutable';

export const INITIAL_STATE = Map(
  {
    lessons: Stack([
      {
        koan: "Equity",
        code: "X === 42"
      },{
        koan: "Additions",
        code: "39 + X === 42"
      }
    ]),
    knowledge: Stack(),
    welcome: "Welcome to JavaScript Koans"
  });

function nextKoan (state) {
  let oldVal = state.get("lessons").first(),
      newState = state.updateIn(["lessons"], stack => stack.shift());
  if (oldVal === undefined) {
    console.log("FINISHED");
    return state;
  } else {
    return newState.updateIn(["knowledge"], stack => stack.push(oldVal));
  }
}

function previousKoan (state) {
  let oldVal = state.get("knowledge").first(),
      newState = state.updateIn(["knowledge"], stack => stack.shift());
  if (oldVal === undefined) {
    console.log("INTRO");
    return state;
  } else {
    return newState.updateIn(["lessons"], stack => stack.push(oldVal));
  }
}


export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEXT_KOAN':
    return nextKoan(state);
  case "PREVIOUS_KOAN":
    return previousKoan(state);
  default:
    return state;
  }
}
