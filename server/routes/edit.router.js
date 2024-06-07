const express = require('express');
const pool = require('../modules/pool');         
const router = express.Router();

// GET  --- SINGLE POST ---    /post/:post_id
router.get('/:post_id', (req, res) => { console.log('In the edit router, attempting to GET', req.params.post_id)
  const postId = req.params.post_id; // Extract post ID from URL params
  const sqlText = `
    SELECT * FROM post 
    WHERE post_id = $1`; // SQL query to fetch post by ID
  const sqlValues = [postId]; // Values for the SQL query
  
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const singlePost = dbRes.rows[0]; // Extract single post from database response
      console.log('DO WE HAVE JSON?', singlePost)
      res.json(singlePost); // Return the single post as JSON response
    })
    .catch((dbErr) => {
      console.error('Error fetching single post:', dbErr);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle error and return JSON response
    });
});

/* PUT route /EditCrush/api/edit/:post_id */
// router.put('/:post_id', (req, res) => {
//     // Update this single post
//     console.log('PUT /post/:post_id received a request!', postToUpdate)
//     console.log('req.body is:', req.body)
//     const postToUpdate = req.params.post_id;
//     const sqlText = `UPDATE post SET user_id = $1 username = $2 crush_text = $3 where_crushed = $4 star_count = $5 WHERE id = $6`;
//     const sqlValues = [req.body.user_id, req.body.username, req.body.crush_text, req.body.where_crushed, req.body.star_count, postToUpdate];
    
//     pool.query(sqlText, sqlValues)
//         .then((result) => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         });
//   });
  /* PUT route /EditCrush/api/edit/:post_id */
router.put('/:post_id', (req, res) => {
  // Update this single post
 
  console.log('req.body is:', req.body)
  const postToUpdate = req.params.post_id;
  console.log('PUT /post/:post_id received a request!', postToUpdate)
  const sqlText = `UPDATE post SET crush_text = $1, where_crushed = $2, star_count = $3 WHERE post_id = $4`;
  // const sqlValues = [req.body.crush_text, req.body.where_crushed, req.body.star_count, postToUpdate];
  pool.query(sqlText, [req.body.crush_text, req.body.where_crushed, req.body.star_count, postToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

  
  /* POST route */
router.post('/', (req, res) => {
    console.log(req.body);
    const user_id = req.body.post;
    const sqlText = `INSERT INTO post (user_id) VALUES ($1, $2, $3, $4, $5, $6)`;
  
    pool.query(sqlText, [user_id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
  });
  
    module.exports = router;