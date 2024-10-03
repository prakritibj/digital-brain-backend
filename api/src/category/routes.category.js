const express = require("express")
const categoryController = require("./controller.category")
const validate = require("../../middlewares/Validation.middleware")
const {categoryValidationSchema} = require("../validationSchema/category.validation")
const authHelper = require("../../helpers/authHelper")

const router = express.Router()
  router.post("/create",authHelper, validate(categoryValidationSchema),categoryController.createCategory)
  router.get("/getAllcategory",authHelper, categoryController.getAllCategory)
  router.get("/getSingleCategory/:id",authHelper, categoryController.getSingleCategory)
  router.delete("/delete/:id",authHelper ,categoryController.deletecategory)
  router.patch("/update/:id",authHelper ,categoryController.updateCategory)
  // router.get('/:id/subcategories', categoryController.getSubcategoriesByCategoryId);
  router.get("/getAllCategories",authHelper ,categoryController.getAllCategories)




  module.exports = router