const resourseService = require("./services.resource")

const resourceController = {}

// Create a newresourse
resourceController.createResourse = async (req, res) => {
    const {name,  subcategoryID , link } = req.body
    if (!name || !subcategoryID || !link) {
    return res.send({
        status: false, msg: "name,subcategoryID, and link are required", data: null
    })
}
try {
    const newResourse= await resourseService.createResourse({name, subcategoryID, link })
    console.log(newResourse,"newresourse")
   
    return res.send({status:true,msg: "resourse created successfully",data: newResourse
    })
} catch (error) {
    console.error('Create resourse error:', error)
    return res.send({ status: false,msg: "Error creating resourse",data: null
    })
}
}

module.exports = resourceController

