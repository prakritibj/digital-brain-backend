const user = require("./model.user")
const userService = {}
const bcrypt = require("bcrypt")

// register
userService.registerUser = async({name,userName,password})=>{
      const hash = bcrypt.hashSync(password,10)
      let newUser = await user.create({name,userName,password: hash})
      return newUser
}
// login
// by username
// find array deta hai
userService.findByUserName = async(userName)=>{
    return await user.find({userName})
}

 
// get all users
userService.getAllUsers = async (id) => {
    return await user.findById(id)
}


// find object deta hai
userService.loginUsers = async(userName,password)=>{
    return await user.findOne({userName,password})
}


// userService.getUserById = async (id) => {
//     return await user.findById(id)
// }




module.exports = userService