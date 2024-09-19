const express = require("express")
const resourceController = require("./controller.resourse")
const validate = require("../../middlewares/Validation.middleware")
const {resourceValidationSchema} = require("../validationSchema/resourse.validation")
const router = express.Router()
  router.post("/create" , validate(resourceValidationSchema),resourceController.createResourse)


  module.exports = router