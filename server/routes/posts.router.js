const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET post */
router.get('/', (req, res) => {
    // Get all of the CRUSH's in the table
    const sqlText = `SELECT * FROM post ORDER BY post_id DESC`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
  });

  module.exports = router;