const express = require("express")
const subcategoryController = require("./controller.subcategory")
const validate = require("../../middlewares/Validation.middleware")
const {subcategoryValidationSchema} = require("../validationSchema/subcategory.validation")
const authHelper = require("../../helpers/authHelper")
const router = express.Router()
  router.post("/createsubcategory", authHelper, validate(subcategoryValidationSchema),subcategoryController.createSubcategory)
  router.get("/getAllsubcategory",authHelper, subcategoryController.getAllSubcategories)
  router.get("/getSingleSubCategory/:id",authHelper ,subcategoryController.getSingleSubCategory)
  router.delete("/delete/:id",authHelper ,subcategoryController.deleteSubcategory)
  router.patch("/update/:id",authHelper ,subcategoryController.updateSubcategory)
  router.get("/getSubcategoryWithResources/:id", authHelper, subcategoryController.getSubcategoryWithResources);


  module.exports = router 