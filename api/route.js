const userRoute = require("./src/user/routes.user")
const transactionRoute = require("./src/transaction/routes.transaction")
const router = require("express").Router()
  router.use("/user" , userRoute)
  router.use("/transition" ,transactionRoute)

  module.exports = router