const postToEdit = (state = {}, action) => {
  switch (action.type) {
      case 'SET_POST_TO_EDIT':
          return action.payload;
      case 'EDIT_POST_ID_INPUT':
          return {
              ...state,
              [action.payload.name]: action.payload.value
          };
      default:
          return state
  }
};

export default postToEdit;