const { exist } = require("joi")
const resourseService = require("./services.resource")

const resourceController = {}

// Create a newresourse
resourceController.createResourse = async (req, res) => {
    const {name ,link,description,subcategoryId} = req.body
    if (!name || !description || !link || !subcategoryId ) {
    return res.send({
        status: false,
         msg: "name,description,and link and subcategory id are required",
          data: null
    })
}
try {

    const exists = await resourseService.resourseExists( name);
    console.log(exists,"exist")
    if (exists) {
        if(exists.isDeleted){
             // If it exists and is marked as deleted, update it to "isDeleted: false"
             const restoredResourse= await resourseService.updateResousrse(existingCategory._id, { isDeleted: false });
             return res.send({
                 status: true,
                 msg: "resourse restored successfully",
                 data: restoredResourse
             });
        }
        return res.send({
            status: false,
            msg: "resourse with this resourse name already exists",
            data: null
        });
    }
    const newResourse= await resourseService.createResourse({name,description,link,subcategoryId })
    console.log(newResourse,"newresourse")
   
    return res.send({status:true,msg: "resourse created successfully",data: newResourse
    })
} catch (error) {
    console.error('Create resourse error:', error)
    return res.send({
         status: false,msg: "Error creating resourse",data: null
    })
}
}
// get all resourse
resourceController.getAllResourse = async (req, res) => {
    try {
        const allResource = await resourseService.getAllResourse()
        console.log(allResource ,"hii")
        if (allResource.length) {
            return res.send({ status: true, msg:"all resourse data getted",data:allResource  })
        }
        return res.send({ msg: "resourse are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: false, data: [], error: err })
    }
}

//get single resourse
resourceController.getSingleResourse  = async (req, res) =>{
    const { id } = req.params;
    try {
        const getSingleResourse  = await resourseService.getSingleResourse(id)
        console.log(getSingleResourse  ,"getsingle")
        if (getSingleResourse) {
            return res.send({ status: true, msg:" data getted",data: getSingleResourse  })
        }
        return res.send({ msg: "resourse are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: false, data: [], error: err })
    }
  }

// Delete resourse
resourceController.deleteResousrse = async (req, res) => {
    const { id } = req.params

if (!id) {
    return res.send({
        status: false,
        msg: "Resousrse ID is required",
        data: null
    }) 
}

try {
    const deleted = await resourseService.deleteResousrse (id ,{$set : {isDeleted : true}})
    if (!deleted ) {
        return res.send({
            status: false,
            msg: "Resousrse not found",
            data: null
        })
    }
    return res.send({
        status:true,
        msg: "Resousrse deleted successfully",
        data: deleted
    })
} catch (error) {
    console.error('Delete Resousrse error:', error)
    return res.send({
        status: false,
        msg: "Error deleting Resousrse",
        data: null
    })
}
}

// Update a Resousrse
resourceController.updateResousrse= async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    console.log(id,"id")
    console.log(updateData, "updT")

if (!id) {
    return res.send({
        status: false,
        msg: "Resousrse ID is required",
        data: null
    })
}

try {
    const updated = await resourseService.updateResousrse(id, updateData)
    if (!updated  ||updated.isDeleted) {
        return res.send({
            status: false,
            msg: "Resousrse not found",
            data: null
        })
    }
    return res.send({
        status:true,
        msg: "Resousrse updated successfully",
        data: updated
    })
} catch (error) {
    console.error('Update Resousrse error:', error)
    return res.send({
        status: false,
        msg: "Error updating Resousrse",
        data: null
    })
}
}


module.exports = resourceController

