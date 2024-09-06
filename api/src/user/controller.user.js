const userService = require("./services.user")
const jwttoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const userController = {}

userController.registerUser = async (req, res) => {
    const { name, userName, password, confirmPassword } = req.body
    if (!name || !userName || !password || !confirmPassword) {
        return res.send({
            status: "Err",
            msg: "name,userName,password,confirmPassword are required",
            data: null
        })
    }
    if (password !== confirmPassword) {
        return res.send({
            status: "Err", msg: " do not match password", data: null
        })
    }



    // find by user name check
    const userNameCheck = await userService.findByUserName(userName)
    // console.log(userNameCheck, "chek")
    if (userNameCheck.length) {
        return res.send({ status: "err", msg: "user already exist", data: null })
    }

    try {
        const createdUser = await userService.registerUser({ name, userName, password, confirmPassword })
        // return res.send({ status: "OK", msg: "user registered sucessfully", data: createdUser })
        if (createdUser){

            let token = jwttoken.sign({ _id: createdUser._id }, process.env.TOKEN_SECRET)
            return res.send({ status: "OK", msg: "user registered sucessfully", data: createdUser , token:token})

        }
    } catch (error) {
        console.log(error, "register error")
        return res.send({ status: "err", msg: "somthing went wrong", data: null })

    }

}
// get all users
userController.getAllUser = async (req, res) => {
    try {
        const getAllUserdata= await userService.getAllUsers()
        // console.log(getAllUserdata,"hii")
        if (getAllUserdata.length) {
            return res.send({ status: "OK", msg:"all user data getted", data: getAllUserdata})
        }
        return res.send({ msg: "users not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: "ERR", data: [], error: err })
    }
}

// login
userController.loginUserRoute = async (req, res) => {
    try {
        const { userName, password } = req.body
        if (!userName || !password) {
            return res.send({
                status: "Err",
                msg: "userName,password require",
                data: null
            })
        }

        const loginusers = await userService.findByUserName(userName)
        console.log(loginusers,"log")


        if (!loginusers) {
            return res.send({ status: "Err", msg: "user not found", data: null })
        }

        let { password: hash } = loginusers[0]
        let compare = bcrypt.compareSync(password, hash)
        // console.log(compare)
        if (compare) {
            //  token
            let token = jwttoken.sign({ _id: loginusers._id }, process.env.TOKEN_SECRET)
            // console.log(token, "token")
            return res.send({ status: "ok", msg: "user login", data: { token: token, name: loginusers[0].name, userName: loginusers[0].userName } })
        } else {
            return res.send({ status: "err", msg: "user not login", data: null })
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = userController






