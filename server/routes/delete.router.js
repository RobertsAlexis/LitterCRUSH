const express = require('express');
const pool = require('../modules/pool');         
const router = express.Router();

router.delete('/:post_id', (req, res) => {
    console.log('IN DELETE req.params.id', req.params.post_id)
    const queryText = `
      DELETE FROM "post" 
        WHERE post_id = $1
    `;
    pool.query(queryText, [req.params.post_id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error in DELETE /api/post/:id', err);
      res.sendStatus(500);
    });
});

module.exports = router;