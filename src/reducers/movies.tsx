const initialState = { value: 0 };

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_MOVIES':
      console.log('HOLA +', action);
      return { ...state, value: state.value + action.delta };
    case 'DECREMENT_MOVIES':
      console.log('HOLA -', action);
      return { ...state, value: state.value - action.delta };
    case 'RESET_MOVIES':
      console.log('HOLA RESET', action);
      return { ...state, value: 0 };
    default:
      console.log('HOLA Default', action, state);
      return state;
  }
};

export default movies;
