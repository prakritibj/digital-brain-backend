const express = require("express")
const categoryController = require("./controller.category")
const validate = require("../../middlewares/Validation.middleware")
const {categoryValidationSchema} = require("../validationSchema/category.validation")

const router = express.Router()
  router.post("/create", validate(categoryValidationSchema),categoryController.createCategory)
  router.get("/getAllcategory", categoryController.getAllCategory)
  router.delete("/delete/:id" ,categoryController.deletecategory)
  router.patch("/update/:id" ,categoryController.updateCategory)
  router.get('/:id/subcategories', categoryController.getSubcategoriesByCategoryId);


  module.exports = router