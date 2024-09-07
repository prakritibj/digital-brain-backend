const note = require("./model.note")
const NoteService = {}


NoteService.createNote = async ({ tittle,writeNote})=>{
     const notee= await note.create({tittle,writeNote})
     console.log(notee, "notee")
     return notee
}
// /////////////////////////////
// Get all note
// NoteService.getAllNote = async () => {
//         return await note.find();
// };
// -------------------------------------------------//////////
NoteService.getAllNote = async ({ startDate, endDate, page = 1, limit = 2}) => {
        const skip = (page - 1) * limit;
        const query = {};
    
        if (startDate || endDate) {
            query.date = {};
            if (startDate) query.date.$gte = new Date(startDate);
            if (endDate) query.date.$lte = new Date(endDate);
        }
    
        const notes = await note.find(query).sort({ date: -1 }).skip(skip).limit(limit);
        const total = await note.countDocuments(query); // Get total count of notes based on the query
    
        return { notes, total };
    };
// -------------------------------------------------///////////

// Get a note by ID
NoteService.getById = async (id) => {
    return await note.findById(id)
        
}

// Delete a note by ID
NoteService.deleteNote = async (id) => {
        return await note.findByIdAndDelete(id)
};

module.exports = NoteService

