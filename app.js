const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const cors = require('cors');
const corsOptions = {
  origin: '*', 
  methods: 'GET,PUT,PATCH,POST,DELETE', 
  allowedHeaders: ['Content-Type', 'x-access-token'], 
  credentials: true, 
};


app.use(cors(corsOptions));

const router = require("./api/route")

  app.use("/" , router)
  require("./db")

  module.exports = app

