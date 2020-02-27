export const initialState = {
  user: null
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return;

    default:
      return {...state};
  }
};
