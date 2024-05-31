const edit = (state  = {}, action) => {
    if (action.type === 'SET_POST_TO_EDIT') {
      return action.payload
    } else if (action.type === 'EDIT_POST_INPUT') {
      return {
        ...state, // copy the current value of this reducer into the new object we're going to return
        u: action.payload
      }
    }
    return state;
};

export default edit;