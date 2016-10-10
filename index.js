const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const port = 3000;

app.use(session({  
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(port, (err) => {
    if(err) { console.log(err); }
    console.log(`Server running on : ${port}`);
});