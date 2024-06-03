// REDUCER all the posts from the DB
// const fetchPostList = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_POST_LIST':
//       console.log('in Posts reducer', action.payload)
//       return action.payload;
//     default:
//       return state;
//   } 
// };

// step 3 // REDUCER hold only the single post object being edited
const postToEdit = (state  = [], action) => {
    if (action.type === 'SET_POST_TO_EDIT') {
      return action.payload
    } else if (action.type === 'EDIT_POST_ID_INPUT') {
      return {
        ...state, // copy the current value of this reducer into the new object we're going to return
        post_id: action.payload
      }
    }
    
    return state;
}
// 

export default postToEdit;
