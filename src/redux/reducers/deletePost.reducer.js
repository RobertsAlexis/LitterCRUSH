// when getting many objects, use an array [{}, {}] - but we want just one, so we will use {}
const deletePost = (state = {}, action) => {
  console.log('DELETE state', action);
    switch (action.type) {
      case 'DELETE_ITEM':
      // Handle the DELETE_ITEM action here
      // return {
      //   ...state,
      //   // Update the state to reflect the deletion of the item
      // };
      // return state.filter(item => item.id !== action.payload);
      return action.payload;
    default:
      // Return the previous state for any other action
      return state;
    }
  };

  export default deletePost;