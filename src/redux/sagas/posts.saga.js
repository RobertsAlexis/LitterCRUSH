import { takeLatest } from "redux-saga/effects";

function* addUserPost(action) {
    console.log('addUserPost Saga', action.payload);
    try {
        yield axios.post('/api/new-post', action.payload);
        yield put ({
            type: 'FETCH_USER_POSTS',
            payload: action.payload,
        });
    } catch (err) {
        console.log('AXIOS | POST in ADD post', err);
    }
}

function userPostsSaga () {
    yield takeLatest('ADD_USER_POST', addUserPost);
}

export default userPostsSaga;