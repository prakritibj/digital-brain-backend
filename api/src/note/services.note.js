const note = require("./model.note")
const NoteService = {}


NoteService.createNote = async ({ tittle,writeNote})=>{
     const notee= await note.create({tittle,writeNote})
     console.log(notee, "notee")
     return notee
}
// /////////////////////////////
// Get all note
NoteService.getAllNote = async (id) => {
        return await note.find({id});
};

// Get a note by ID
NoteService.getById = async (id) => {
    return await note.findById(id)
        
}

// Delete a note by ID
NoteService.deleteNote = async (id) => {
        return await note.findByIdAndDelete(id)
};

module.exports = NoteService

