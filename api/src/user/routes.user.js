const express = require("express")
const userController = require("./controller.user")
// const validate = require("../../middlewares/Validation.middleware")
// const {userValidationSchema} = require("../validationSchema/user.validation")

const router = express.Router()
router.post("/register",userController.registerUser)
router.get("/getalluser", userController.getAllUser)
router.post("/login" , userController.loginUserRoute)

module.exports = router
