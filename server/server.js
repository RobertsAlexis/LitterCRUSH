const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const userPostsRouter = require('./routes/userpost.router');
const postsRouter = require('./routes/posts.router');
const profileRouter = require('./routes/profile.router');
const editRouter = require('./routes/edit.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/user-post', userPostsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/edit/', editRouter);

/** ---------- Listen Server & Port ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


