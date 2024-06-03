const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET /post/:post_id */
router.get('/', (req, res) => {
  // console.log('HEEEEEEEEEEEEEEEY we are in the posts router!!!', queryText)
    const queryText = `
      SELECT * FROM post ORDER BY post_id DESC; 
    `
  pool.query(queryText)
    .then((result) => { console.log('am i getting the POSTS data', result.rows)
      res.send(result.rows); 
      })
    .catch((err) => {
      console.log('Error in GET /api/post', err);
      res.sendStatus(500);
      })
      .catch((dbErr) => {
        console.log('GET /post/:post_id error:', dbErr)
        res.sendStatus(500)
      });
  });

  module.exports = router;