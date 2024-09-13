 
const resourse = require("./model.resource")
const resourseService = {}
// const subcategory = require("../subcategorys/model.subcategory")

resourseService.createResourse = async ({name,subcategoryID, link})=>{
    return await  resourse.create({name, subcategoryID, link})
    //  console.log(newResorse, "newResorse")

}
// subcategoryID ya isi ki ID
resourseService.getAllResourse = async (id) => {
    return await resourse.find({id});
};
resourseService.resourseExists = async (name) => {
    return await resourse.findOne({name});
};
// Delete a category by ID
resourseService.deleteResousrse = async (id) => {
    return await resourse.findByIdAndDelete(id)
};

// update a category by ID
resourseService.updateCategory = async (id, updates) => {
return await resourse.findByIdAndUpdate(id, updates, { new: true });
}

module.exports = resourseService

// ===============================================================


