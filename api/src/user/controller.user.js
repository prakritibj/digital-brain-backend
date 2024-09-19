const userService = require("./services.user")
const jwttoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const userController = {}

userController.registerUser = async (req, res) => {
    const { name, userName, password, confirmPassword } = req.body
    if (!name || !userName || !password || !confirmPassword) {
        return res.send({
            status: false,
            msg: "name,userName,password,confirmPassword are required",
            data: null
        })
    }
    if (password !== confirmPassword) {
        return res.send({
            status: false, msg: "do not match password", data: null
        })
    }

    // find by user name check
    const userNameCheck = await userService.findByUserName(userName)
    // console.log(userNameCheck, "chek")
    if (userNameCheck.length) {
        return res.send({ status: false, msg: "user already exist", data: null })
    }

    try {
        const createdUser = await userService.registerUser({ name, userName, password, confirmPassword })
        // return res.send({ status: true, msg: "user registered sucessfully", data: createdUser })
        if (createdUser){

            let token = jwttoken.sign({ _id: createdUser._id }, process.env.TOKEN_SECRET)
            return res.send({ status: true, msg: "user registered sucessfully", data: createdUser , token:token})

        }
    } catch (error) {
        console.log(error, "register error")
        return res.send({ status: false, msg: "somthing went wrong", data: null })

    }

}

// login
userController.loginUserRoute = async (req, res) => {
    try {
        const { userName, password } = req.body
        if (!userName || !password) {
            return res.send({
                status: false,
                msg: "userName,password require",
                data: null
            })
        }

        const loginusers = await userService.findByUserName(userName)
        console.log(loginusers,"log")

        if (!loginusers) {
            return res.send({ status: false, msg: "user not found", data: null })
        }
        

        let { password: hash } = loginusers[0]
        let compare = bcrypt.compareSync(password, hash)
        // console.log(compare)
        if (compare) {
            //  token
            let token = jwttoken.sign({ _id: loginusers._id }, process.env.TOKEN_SECRET)
            // console.log(token, "token")
            return res.send({ status: true, msg: "user login", data: { token: token, name: loginusers[0].name, userName: loginusers[0].userName } })
        } else {
            return res.send({ status: false, msg: "user not login", data: null })
        }
    } catch (err) {
        console.log(err)
    }
}

// profile
userController.getAllUsers = async (req, res) => {
   const {id} = req.params
   console.log(id,"id")
    try {
        const user = await userService.getAllUsers(id)
        console.log(user,"user")
        if(user){
            res.send({status: true, data: user.name})
        }
    } catch (error) {
        console.log(error)
    }
}


// userController.getUserById  = async (req, res) => {
//     const {id} = req.params
//     console.log(id,"id")
//      try {
//          const user = await userService.getUserById(id)
//          console.log(user,"user")
//          if(user){
//              res.send({status: true, data: user.name})
//          }
//      } catch (error) {
//          console.log(error)
//      }
//  }


module.exports = userController






