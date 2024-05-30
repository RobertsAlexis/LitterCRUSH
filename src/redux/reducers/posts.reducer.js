const posts = (state = [], action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return action.payload;
      default:
        return state;
    } 
    console.log('in the post reducer', posts)
  };
 

  export default posts;