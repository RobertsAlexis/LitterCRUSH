import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

  function* deletePost(action) {
    console.log('theThingToDelete is:', action.payload)
    try {
      yield axios.delete(`/api/delete/${action.payload}`);
      yield put({
        type: 'DELETE_ITEM',
        payload: action.payload
      });
    }
    catch (err) {
      console.log('Error in Delete', err)
    }
  };
  function* deleteSaga () {
    yield takeLatest('DELETE_POST', deletePost);
};

  export default deleteSaga; 