const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* PUT route /api/edit/:post_id/ */
router.put('/:post_id', (req, res) => {
    // Update this single post
    console.log('PUT /post/:post_id received a request!', postToUpdate)
    console.log('req.body is:', req.body)
    const postToUpdate = req.params.id;
    const sqlText = `UPDATE post SET crush_text = $1 where_crushed = $2 star_count = $3 WHERE post_id = $4`;
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