const express = require("express")
const resourceController = require("./controller.resourse")
const validate = require("../../middlewares/Validation.middleware")
const {resourceValidationSchema} = require("../validationSchema/resourse.validation")
const authHelper = require("../../helpers/authHelper")
const router = express.Router()
  router.post("/create" ,authHelper, validate(resourceValidationSchema),resourceController.createResourse)
  router.get("/getAllResousrse",authHelper, resourceController.getAllResourse)
  router.get("/getSingleResousrse/:id",authHelper ,resourceController.getSingleResourse)
  router.delete("/delete/:id",authHelper ,resourceController.deleteResousrse)
  router.patch("/update/:id",authHelper ,resourceController.updateResousrse)


  module.exports = router