import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import userPostSaga from './user.post.saga';
import postsSaga from './posts.saga';
import profileSaga from './profile.saga';
import editSaga from './edit.saga';
import deleteSaga from './delete.saga.js';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    userPostSaga(),
    postsSaga(),
    profileSaga(),
    editSaga(),
    deleteSaga(),
  ]);
}
 