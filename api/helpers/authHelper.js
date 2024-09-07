const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports =(req,res,next) =>{
    const token = req.headers["x-access-token"]
    if(!token){
        return res.send({status: "Err" ,msg : "no token provided",data:null})
    }
    try{
        const tokenData = jwt.verify(token,process.env.TOKEN_SECRET)
        req._id = tokenData._id
        next()
    }catch(error){
        return res.send({status: "Err" ,msg : "unauthrisied access",data:null})

    }

}