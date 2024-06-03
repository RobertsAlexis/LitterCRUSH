// Edit form reuse same component populate the form with the data from the post - key is don't create a new id update the id already holding. 
// make a crush object in my component before I call my dispatch 
// type script - create avarible called crush - properties in my input field - create a new const = {object with all the things I want} call it current crush create object, 
// go to SAGA axios call in saga - then to database 
// feed - fetch crushes - get - that compont for the crush on the feed 
// 
//

//Post 
// 	post_id 
// 	user_id 
// 	webLink text
// 	when_crushed timestamp with time zone

// const uploadImage = (e) => {
//   const selectedFile = e.target.files[0];
//   // uploading asset to sanity
//   if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
//     setWrongImageType(false);
//     setLoading(true);
//     client.assets
//       .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
//       .then((document) => {
//         setImageAsset(document);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log('Upload failed:', error.message);
//       });
//   } else {
//     setLoading(false);
//     setWrongImageType(true);
//   }
// };


// uuid generator  

DANE

1 - add new post 
_X_ui _x_saga _x_router _x_sql

2 - Get all post litter crushed 
_x_ui _x_saga _x_router _x_sql + _x_reducer 

3 - get 1 post by id (profile)
_saga _route _sql
sql query in post reducer to filter by single user  
4 - edit 1 post by id 
_ui _saga _route _sql 

5 - delete ` post by id

6. from add crush clear inputs and send to Litter CRUCSHED 

7. CSS

8. PHOTO api 

9. Maps api 







EDIT SAGA

import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchStudents() {
  try {
      const response = yield axios.get('/api/posts')
      yield put({ type: 'SET_POST_LIST', payload: response.data })
  } catch (err) {
      console.log(err)
  }
}


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