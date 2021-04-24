require('dotenv').config()
const checkAuth = require('./checkauth')
const mongoose = require('mongoose')
const express = require("express");
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require("path");
const apiRoutes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;
const app = express();
const User = require('./models/user')
const morgan = require('morgan')

// mongoose.connect(process.env.MONGODB_URI, {
mongoose.connect("mongodb://localhost/powerrx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(err => {
  console.log(err)
});

// Define middleware here
app.use(morgan("dev"))
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


  // Define API routes here
  app.use("/api", checkAuth, apiRoutes )



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});