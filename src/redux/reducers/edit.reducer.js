// step 3 // REDUCER hold only the single post object being edited
// const postToEdit = (state  = {}, action) => {
//     if (action.type === 'SET_POST_TO_EDIT') {
//       return action.payload
//     } else if (action.type === 'EDIT_POST_ID_INPUT') {
//       console.log('EDIT_POST_ID_INPUT', action.payload)
//       const { name, value } = action.payload;
//       return {
//         ...state, // copy the current value of this reducer into the new object to return
//         [name]: value, // Set the field dynamically based on the name to update the value
//       }
//     }
//   return state;
// }

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
