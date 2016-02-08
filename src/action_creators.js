export function nextKoan (state) {
  return {
    type: "NEXT_KOAN",
    state
  };
}

export function previousKoan (state) {
  return {
    type: "PREVIOUS_KOAN",
    state
  };
}
