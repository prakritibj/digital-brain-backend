const express = require("express")
const categoryController = require("./controller.category")
const router = express.Router()
  router.post("/create",categoryController.createCategory)
  router.get("/getAllcategory", categoryController.getAllCategory)
  router.delete("/delete/:id" ,categoryController.deletecategory)
  router.patch("/update/:id" ,categoryController.updateCategory)

  module.exports = router