const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('wheeeeeere is the post?', req.body);
    const newPost = req.body.post;
        // post is the key (from user.post.saga)
    const addNewPost = 'INSERT INTO "post" ("user_id", "username", "crush_text", "where_crushed", "star_count") VALUES ($1, $2, $3, $4, $5);';
    const queryValues = [
        newPost.user_id,
        newPost.username,
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
            console.log(`Error making database query`, err);
            res.sendStatus(500);
        });
});


module.exports = router;

// test by doing local host 5001/api - should be able to see json data 