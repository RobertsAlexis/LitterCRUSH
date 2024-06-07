import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* addPost(action) {
  try {
      yield axios({
        method: 'POST',
        url: '/api/user-post',
        data: {
          post: action.payload
        }
        // post is the key 
      })
      console.log('where is the payload?', action.payload)
      yield put({ type: 'FETCH_POST' })
  } catch (err) {
      console.log(err)
  }
};

function* userPostSaga () {
    yield takeLatest('ADD_POST', addPost);
};

export default userPostSaga;