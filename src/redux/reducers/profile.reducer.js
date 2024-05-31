const profile = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROFILE_POSTS':
        console.log('in Profile reducer', action.payload)
        return action.payload;
      default:
        return state;
    } 
  };
 

  export default profile;