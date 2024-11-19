 
const resourse = require("./model.resource")
const resourseService = {}

resourseService.createResourse = async ({name,description, link, subcategoryId})=>{
    return await  resourse.create({name,description,link,subcategoryId})

}
// resourse ya isi ki ID
resourseService.getAllResourse = async (id) => {
    return await resourse.find({id,isDeleted: false});
};
resourseService.resourseExists = async (name) => {
    return await resourse.findOne({name});
};
// Delete a resourse by ID

resourseService.deleteResousrse = async (id,updateField) => {
    return await resourse.findByIdAndUpdate({_id: id}, {...updateField}, {new :true})
}

// get single resourse
resourseService.getSingleResourse = async (id) => {
    return await resourse.findById(id)
}
// update a resourse by ID
resourseService.updateResousrse= async (id, updates) => {
return await resourse.findByIdAndUpdate(id, updates, { new: true });
}

module.exports = resourseService

// ===============================================================


