const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const newPost = req.body;
    const addNewPost = 'INSERT INTO "post" ("user_id", "crush_text", "where_crushed", "star_count") VALUES ($1, $2, $3, $4);';
    const queryValues = [
        newPost.user_id,
        newPost.crush_text,
        newPost.where_crushed,
        newPost.star_count,
    ];
    pool
        .query(addNewPost, queryValues)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch ((err) => {
            console.log(`Error in POST '/api/new-post'`, err);
            res.sendStatus(500);
        });
});


module.exports = router;
