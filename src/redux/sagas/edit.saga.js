import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

// step 2
function* fetchPostToEdit(action) {
    try {
      console.log('aaaaaaaaaaaare we in the edit saga?', fetchPostToEdit)
      const post_id = action.payload
      
      const response = yield axios({
        method: 'GET',
        url: `/EditCrush/api/edit/${post_id}`
      });
      console.log('in the edit saga', fetchPostToEdit)
      // changing payload from postToEdit to response.data
      const postToEdit = response.data
      // once we get the post we want to edit we will sent it to the postToEdit reducer
      console.log('postToEdit inside fetchPostToEdit saga function is', postToEdit)
      // yield put({
      //   type: 'SET_POST_TO_EDIT',
      //   payload: postToEdit
      // })
    } catch (err) {
      console.log('YOOOOOOOOOOOOOOOO fetchPostToEdit error:', err)
    }
  }
  function* editSaga () {
    yield takeLatest('FETCH_POST_TO_EDIT', fetchPostToEdit);
};

export default editSaga;