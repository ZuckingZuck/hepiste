const express = require('express');
const cors = require("cors");
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const adminRouter = require('./routes/Admin');
const clientRouter = require('./routes/Client');
const authRouter = require('./routes/Auth');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())


const ConnectionString = process.env.ConnectionString;

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/api/admin', adminRouter);
app.use('/api/client', clientRouter);
app.use('/api/auth', authRouter);

mongoose.connect(ConnectionString)
  .then(() => {
      console.log('Connected to mongodb');
      app.listen(PORT);
      console.log(PORT);
  })
  .catch(err => { console.log(err) });