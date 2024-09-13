 
const resourse = require("./model.resource")
const resourseService = {}
// const subcategory = require("../subcategorys/model.subcategory")

resourseService.createResourse = async ({name,subcategoryID, link})=>{
    return await  resourse.create({name, subcategoryID, link})
    //  console.log(newResorse, "newResorse")

}

module.exports = resourseService
