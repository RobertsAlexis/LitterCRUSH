import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchPostToEdit(action) {
    try {
      console.log('aaaaaaaaaaaare we in the edit saga?', fetchPostToEdit)
      const idOfPost = action.payload
      let response = yield axios({
        method: 'GET',
        url: `/api/edit/:post_id/${idOfPost}`
      });
      console.log('in the edit saga', fetchPostToEdit)
      // changing payload from postToEdit to response.data
      const postToEdit = response.data
      yield put({
        type: 'SET_POST_TO_EDIT',
        payload: postToEdit
      })
    } catch (err) {
      console.log('fetchPostToEdit error:', err)
    }
  }
  function* editSaga () {
    yield takeLatest('FETCH_POST_TO_EDIT', fetchPostToEdit);
};

export default editSaga;