const deletePost = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_POST':
        return action.payload;
      default:
        return state;
    }
  };

  export default deletePost;