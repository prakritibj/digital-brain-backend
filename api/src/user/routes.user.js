const express = require("express")
const userController = require("./controller.user")

const router = express.Router()
router.post("/register" , userController.registerUser)
router.get("/getalluser", userController.getAllUser)
router.post("/login" , userController.loginUserRoute)

module.exports = router
