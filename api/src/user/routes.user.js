const express = require("express")
const userController = require("./controller.user")
const validate = require("../../middlewares/Validation.middleware")
const {userValidationSchema,loginValidationSchema} = require("../validationSchema/user.validation")

const authHelper = require("../../helpers/authHelper")

const router = express.Router()
router.post("/register",validate(userValidationSchema),userController.registerUser)
router.get("/getalluser",authHelper, userController.getAllUsers)
router.post("/login" , validate(loginValidationSchema),userController.loginUserRoute)
// router.get("/profile/:id", authHelper, userController.getAllUsers)

module.exports = router
