const mongoose =  require("mongoose")
const DB_URl = "mongodb+srv://lakshyabhartiya77:8ASyPpeOz9quBDWd@database-server.mlc9t2n.mongodb.net/Personal-growth"

mongoose.connect(DB_URl).then((dbres)=>{
    console.log("your data base is connected")
})
.catch((error)=>{
    console.log("db not connected" , error)
})