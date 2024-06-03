const express = require('express');
const pool = require('../modules/pool');         
const router = express.Router();

// step 1 // GET  --- SINGLE POST ---    /post/:post_id
router.get('/:post_id', (req, res) => {
  // console.log('YOOOOOOOOOO GET /api/edit/:post_id error:', sqlValues)
    const sqlText = `
      SELECT * FROM post
        WHERE post_id = $1;
    `
    const sqlValues = [req.params.post_id]
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        // object from the rows array
        const singlePost = dbRes.rows[0]
        res.send(singlePost)
      })
      .catch((dbErr) => {
        console.log('GET /api/edit/:post_id error:', dbErr)
        res.sendStatus(500)
      })
  })

/* PUT route /EditCrush/api/edit/:post_id */
router.put('/:post_id', (req, res) => {
    // Update this single post
    console.log('PUT /post/:post_id received a request!', postToUpdate)
    console.log('req.body is:', req.body)
    const postToUpdate = req.params.id;
    const sqlText = `UPDATE post SET user_id = $1 username = $2 crush_text = $3 where_crushed = $4 star_count = $4`;
    pool.query(sqlText, [req.body.github_name, postToUpdate])
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
  
    module.exports = router;