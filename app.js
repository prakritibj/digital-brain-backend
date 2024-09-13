const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,PUT,PATCH,POST,DELETE', 
  allowedHeaders: 'Content-Type, Authorization', 
  credentials: true, 
};


app.use(cors(corsOptions));

const router = require("./api/route")

  app.use("/" , router)
  require("./db")

  module.exports = app