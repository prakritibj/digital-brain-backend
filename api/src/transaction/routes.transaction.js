const express = require("express")
const transactionController = require("./controller.transaction")
const router = express.Router()
  router.post("/create" ,transactionController.createTransaction)
  router.get("/getTransaction", transactionController.getAllTransactions)
  router.patch("/update/:id" ,transactionController.updateTransaction)
  router.delete("/delete/:id" ,transactionController.deleteTransaction)

  module.exports = router
