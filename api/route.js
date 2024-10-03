const userRoute = require("./src/user/routes.user")
const resourseRoute = require("./src/resources/route.resourse")
const noteRote = require("./src/note/routes.note")
const categoryRoute = require("./src/category/routes.category")
const subcategoryRoute = require("./src/subcategorys/routes.subcategory")

const router = require("express").Router()
  router.use("/user" , userRoute)
  router.use("/resourse",resourseRoute)
  router.use("/notee", noteRote  )
  router.use("/category",categoryRoute)
  router.use("/subcategory",subcategoryRoute)

  module.exports = router