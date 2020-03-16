export default (state, action) => {
  switch (action.type) {
    case 'GOOGLE_SIGNIN': {
      return {
        ...state,
        user: action.payload
      };
    }

    default:
      return state;
  }
};
