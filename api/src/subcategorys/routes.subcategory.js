const express = require("express")
const subcategoryController = require("./controller.subcategory")
const router = express.Router()
  router.post("/createsubcategory",subcategoryController.createSubcategory)
  router.get("/getAllsubcategory", subcategoryController.getAllSubcategories)
  router.delete("/delete/:id" ,subcategoryController.deleteSubcategory)
  router.patch("/update/:id" ,subcategoryController.updateSubcategory)

  module.exports = router