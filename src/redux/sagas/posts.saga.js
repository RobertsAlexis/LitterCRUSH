import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



  function* fetchPosts() {
    try {
      let response = yield axios({
        method: 'GET',
        url: '/api/posts'
      });
  
      yield put({
        type: 'SET_POSTS',
        payload: response.data
      });
    } catch (err) {
      console.log('This error is', err)
    }
  };
  
  
  // const deletePosts = (state = [], action) => {
  //   switch (action.type) {
  //     case 'DELETE_POST':
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // };

  // function* deletePost(action) {
  //   try {
  //     yield axios.delete(`api/posts/${action.payload}`);
  //     yield put({
  //       type: 'DELETE_POST',
  //       payload: action.payload
  //     });
  //   }
  //   catch (err) {
  //     console.log('Error in Delete', err)
  //   }
  // };