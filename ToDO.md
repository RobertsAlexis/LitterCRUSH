1. Add new post 
  _X_ui _x_saga _x_router _x_sql

2. Get all post litter crushed 
  _x_ui _x_saga _x_router _x_sql + _x_reducer 

3. Get 1 post by id (profile)
  -X_saga _X_route _X_sql
    _X_sql query in post reducer to filter by single user  

4. Edit 1 post by id 
  _X_ui _saga _route _sql 

5. Delete post by id

6. From add crush clear inputs and send to Litter CRUCSHED 

7. CSS

8. PHOTO api 

9. Maps api 

// uuid generator  

EDIT ROUTER 


import { takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

// step 2
function* fetchPostToEdit(action) {
    try {
      console.log('aaaaaaaaaaaare we in the edit saga?', fetchPostToEdit)
    
      const post_id = action.payload.post_id 
      console.log('***********************************************', post_id )
      
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
      console.log('YOOOOOOOOOOOOOOOO fetchPostToEdit error:', err)
    }
  }
  function* editSaga () {
    yield takeLatest('FETCH_POST_TO_EDIT', fetchPostToEdit);
};

export default editSaga;


// step 1 // GET  --- SINGLE POST ---    /post/:post_id
// router.get('/:post_id', (req, res) => { console.log('In the edit router, attempting to GET', req.params.post_id)
//   const postId = req.params.post_id; // Extract post ID from URL params
//   const sqlText = `
//     SELECT * FROM post 
//     WHERE post_id = $1`; // SQL query to fetch post by ID
//   const sqlValues = [postId]; // Values for the SQL query
  
//   pool.query(sqlText, sqlValues)
//     .then((dbRes) => {
//       const singlePost = dbRes.rows[0]; // Extract single post from database response
//       console.log('DO WE HAVE JSON?', singlePost)
//       res.json(singlePost); // Return the single post as JSON response
//     })
//     .catch((dbErr) => {
//       console.error('Error fetching single post:', dbErr);
//       res.status(500).json({ error: 'Internal Server Error' }); // Handle error and return JSON response
//     });
// });

/* PUT route /EditCrush/api/edit/:post_id */
router.put('/:post_id', (req, res) => {
    // Update this single post
    console.log('PUT /post/:post_id received a request!', postToUpdate)
    console.log('req.body is:', req.body)
    const postToUpdate = req.params.post_id;
    const sqlText = `UPDATE post SET user_id = $1 username = $2 crush_text = $3 where_crushed = $4 star_count = $5 WHERE id = $6`;
    const sqlValues = [req.body.user_id, req.body.username, req.body.crush_text, req.body.where_crushed, req.body.star_count, postToUpdate];
    
    pool.query(sqlText, sqlValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
  });
  
// /* PUT route /EditCrush/api/edit/:post_id */
// router.put('/:post_id', (req, res) => {
//   // Update this single post
//   console.log('PUT /post/:post_id received a request!', postToUpdate)
//   console.log('req.body is:', req.body)
//   const postToUpdate = req.params.post_id;
//   const sqlText = `UPDATE post SET crush_text = $1 where_crushed = $2 star_count = $3 WHERE id = $4`;
//   const sqlValues = [req.body.crush_text, req.body.where_crushed, req.body.star_count, postToUpdate];
  
//   pool.query(sqlText, sqlValues)
//       .then((result) => {
//           res.sendStatus(200);
//       })
//       .catch((error) => {
//           console.log(`Error making database query ${sqlText}`, error);
//           res.sendStatus(500);
//       });
// });


  
  /* POST route */
router.post('/', (req, res) => {
    console.log(req.body);
    const user_id = req.body.post;
    const sqlText = `INSERT INTO post (user_id) VALUES ($1)`;
  
    pool.query(sqlText, [user_id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
  });

 