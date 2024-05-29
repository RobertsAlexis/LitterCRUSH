const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET /post/:post_id */
router.get('/', (req, res) => {
    const sqlText = `
      SELECT * FROM post
    `
    pool.query(sqlText)
      .then((dbRes) => {
        // dbRes.rows will be something like:
        // [ {id: 4, github_name: 'matthew-black'} ]
  
        // We just want the object from the rows array:
        const singlePost = dbRes.rows[0]
        res.send(singlePost)
      })
      .catch((dbErr) => {
        console.log('GET /post/:post_id error:', dbErr)
        res.sendStatus(500)
      });
  });
  
//   WHERE post_id = $1;
// // /* GET post */
// router.get('/', (req, res) => {
//     // Get all of the CRUSH's in the table
//     const sqlText = `SELECT * FROM post ORDER BY post_id DESC`;
//     pool.query(sqlText)
//         .then((result) => {
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         });
//   });

  module.exports = router;