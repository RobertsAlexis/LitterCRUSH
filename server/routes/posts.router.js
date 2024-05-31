const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET /post/:post_id */
router.get('/', (req, res) => {
    const queryText = ` SELECT * FROM post `
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
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