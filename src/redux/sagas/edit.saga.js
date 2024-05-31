import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchPostToEdit(action) {
    try {
    //   const idOfPost = action.payload
  
      const response = yield axios({
        method: 'GET',
        url: `/api/edit/:post_id/`
      })
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