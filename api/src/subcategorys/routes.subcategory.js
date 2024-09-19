const express = require("express")
const subcategoryController = require("./controller.subcategory")
const validate = require("../../middlewares/Validation.middleware")
const {subcategoryValidationSchema} = require("../validationSchema/subcategory.validation")
const router = express.Router()
  router.post("/createsubcategory",validate(subcategoryValidationSchema),subcategoryController.createSubcategory)
  router.get("/getAllsubcategory", subcategoryController.getAllSubcategories)
  router.delete("/delete/:id" ,subcategoryController.deleteSubcategory)
  router.patch("/update/:id" ,subcategoryController.updateSubcategory)

  module.exports = router