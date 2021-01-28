const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require('path');
const dotenv = require("dotenv");
const passport = require("passport");
const {sequelize} = require('./models');

dotenv.config();
sequelize.sync({force:false})
.then(()=>{
  console.log('connected to db');
})
.catch((err)=>{
  console.error(err);
});

const app = express();
const indexRouter = require("./routes/index.route");
const plantRouter = require('./routes/plant.route');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SECRET_KEY,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/", indexRouter);
app.use("/plants", plantRouter);

module.exports = app;
