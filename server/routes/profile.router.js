const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET /profile post/:post_id */
router.get('/', (req, res) => {
    const queryText = ` SELECT * FROM post WHERE user_id = '1' ;`
    // THE ONE THAT SHOULD WORK       ` SELECT * FROM post WHERE user_id = $1;`
  pool.query(queryText)
    .then((result) => { console.log('am i getting the data ', result.rows)
      res.send(result.rows); })
    .catch((err) => {
      console.log('Error in GET /api/profile', err);
      res.sendStatus(500);
      })
      .catch((dbErr) => {
        console.log('GET /profile/:post_id error:', dbErr)
        res.sendStatus(500)
      });
  });

module.exports = router;