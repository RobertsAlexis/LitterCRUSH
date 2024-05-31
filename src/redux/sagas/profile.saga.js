import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchProfilePosts() {
  try {
    let response = yield axios({
      method: 'GET',
      url: `/api/profile`
    });

    console.log('in the post saga', fetchProfilePosts)
    
    yield put({
      type: 'SET_PROFILE_POSTS',
      payload: response.data
    });
  } catch (err) {
    console.log('This error is', err)
  }
}
  function* profileSaga () {
    yield takeLatest('FETCH_PROFILE_POSTS', fetchProfilePosts);
};

export default profileSaga;