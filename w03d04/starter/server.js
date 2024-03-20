const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 7000;

// data
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1234",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT send an email or password?
  if (!email || !password) {
    return res.status(400).send('you must provide an email and password');
  }

  // try to lookup the user based on their email address
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];

    if (user.email === email) {
      // we found our user
      foundUser = user;
    }
  }

  // check if we DID NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // do the passwords NOT match?
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! they are who they say they are!

  // set a cookie
  res.cookie('userId', foundUser.id);

  // redirect to the protected page
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId from the cookies
  const userId = req.cookies.userId;

  // do they NOT have a cookie?
  if (!userId) {
    return res.status(401).send('only logged in users can visit this page');
  }

  // create the template vars object and render the protected template
  const templateVars = {
    user: users[userId],
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  res.clearCookie('userId');

  // redirect to the login page
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT send an email or password?
  if (!email || !password) {
    return res.status(400).send('you must provide an email and password');
  }

  // try to lookup the user based on their email address
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];

    if (user.email === email) {
      // we found our user
      foundUser = user;
    }
  }

  // check if we DID find a user
  if (foundUser) {
    return res.status(400).send('a user with that email already exists');
  }

  // happy path! the email address is unique

  // create the new user object
  const id = Math.random().toString(36).substring(2, 5);

  const user = {
    id: id,
    email: email,
    password: password,
  };

  // update the users object with our new user
  users[id] = user;

  console.log(users);

  // redirect to the login page
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
