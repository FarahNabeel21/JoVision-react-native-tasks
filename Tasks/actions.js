export const SET_TEXT = 'SET_TEXT';
export const TOGGLE_COMPONENT = 'TOGGLE_COMPONENT';

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export const toggleComponent = () => ({
  type: TOGGLE_COMPONENT,
});
