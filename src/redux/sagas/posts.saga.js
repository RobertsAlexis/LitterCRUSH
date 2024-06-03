import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchPosts() {
  try {
    let response = yield axios({
      method: 'GET',
      url: '/api/posts'
      
    });

    console.log('in the post saga', fetchPosts)

    yield put({
      type: 'SET_POSTS',
      payload: response.data
    });
  } catch (err) {
    console.log('This error is', err)
  }
}
  function* postsSaga () {
    yield takeLatest('FETCH_POSTS', fetchPosts);
};

export default postsSaga;