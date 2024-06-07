import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// step 2
function* fetchPostToEdit(action) {
  try {
    console.log('Are we in the edit saga?', fetchPostToEdit)
  
    const post_id = action.payload.post_id 
    console.log('The post_id in the Edit Saga is:', post_id)
    
    const response = yield axios({
      method: 'GET',
      url: `/api/edit/${post_id}`
    });
    console.log('in the edit saga', response.data)
    // changing payload from postToEdit to response.data
    const postToEdit = response.data;
    // once we get the post we want to edit we will sent it to the postToEdit reducer
    console.log('postToEdit inside fetchPostToEdit saga function is', postToEdit)
    yield put({
      type: 'SET_POST_TO_EDIT',
      payload: postToEdit
    })
  } catch (err) {
    console.log('FetchPostToEdit error:', err)
  }
}

//step 4 ---- PUT /
function* updatePost(action) {
  try {
    const editedPostData = action.payload
    // const post_id = editedPostData.post_id;
    console.log('editedPostData is:', editedPostData)
    yield axios({
      method: 'PUT',
      url: `/api/edit/${editedPostData.post_id}`,
      data: editedPostData
    })
    yield put({
      type: 'FETCH_PROFILE_POSTS'
    })
  } catch (err) {
    console.log('updatePost error:', err)
  }
};

function* editSaga () {
  yield takeLatest('FETCH_POST_TO_EDIT', fetchPostToEdit);
  yield takeLatest('UPDATE_POST', updatePost);
};

export default editSaga;