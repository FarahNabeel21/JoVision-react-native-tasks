import { SET_TEXT, TOGGLE_COMPONENT } from './actions';

const initialState = {
  text: '',
  isComponentVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload };
    case TOGGLE_COMPONENT:
      return { ...state, isComponentVisible: !state.isComponentVisible };
    default:
      return state;
  }
};

export default reducer;
