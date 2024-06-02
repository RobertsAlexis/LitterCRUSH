// REDUCER all the posts from the DB
const posts = (state = [], action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return action.payload;
      default:
        return state;
    } 
  };
 

  export default posts;