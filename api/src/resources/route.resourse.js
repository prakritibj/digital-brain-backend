const express = require("express")
const resourceController = require("./controller.resourse")
const router = express.Router()
  router.post("/create",resourceController.createResourse)


  module.exports = router