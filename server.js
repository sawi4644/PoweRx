const mongoose = require('mongoose')
const express = require("express");
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
// const path = require("path");
// const apiRoutes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;
const app = express();
const User = require('./models/user')


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/powerrx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(err => {
  console.log(err)
});

// Define middleware here
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "http://localhost:3000", //location of the react app were connecting to
  credentials: true
}))

app.use(session({
  secret: 'secretcodoe',
  resave: true,
  saveUninitialized: true,
}))

app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);


//Routes
app.post('/login',(req,res, next) => {
  passport.authenticate('local', (err, user,info) => {
    if (err) throw err 
    if (!user) res.send('No User Exists')
    else {
      req.login(user, err => {
        if (err) throw err
        res.send('Successfully Authenticated')
        console.log(req.user)
      })
    }
  })(req,res,next)
})

app.post('/register',(req,res) => {
  User.findOne({username: req.body.username}, async (err,doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      async function asyncCall() {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
          username:req.body.username,
          password: hashedPassword
        });
        await newUser.save();
        res.send('User Created')
      }
      asyncCall()
    }
  })
})

app.get('/User',(req,res) => {
  res.send(req.user);
})


//Starter code 
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());

  // Serve up static assets (usually on heroku)
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static("client/build"));
  // }

  // Define API routes here
  // app.use(apiRoutes)

  // Send every other request to the React app
  // Define any API routes before this runs
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});