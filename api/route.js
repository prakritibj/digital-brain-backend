const userRoute = require("./src/user/routes.user")
const transactionRoute = require("./src/transaction/routes.transaction")
const noteRote = require("./src/note/routes.note")
const categoryRote = require("./src/category/routes.category")

const router = require("express").Router()
  router.use("/user" , userRoute)
  router.use("/transition" ,transactionRoute)
  router.use("/notee", noteRote  )
  router.use("/category", categoryRote )

  module.exports = router