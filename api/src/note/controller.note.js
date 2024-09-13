
const noteService = require("./services.note");
const noteController = {};

// Create a newtransaction
noteController.createNote = async (req, res) => {
    const { tittle, writeNote } = req.body;
    if (!tittle || !writeNote) {
        return res.send({
            status: false, msg: "tittle and writenote are required", data: null
        })
    }
    try {
        const newNote = await noteService.createNote({ tittle, writeNote })
        console.log(newNote, "newnote")

        return res.send({
            status: true, msg: " note created successfully", data: newNote
        })
    } catch (error) {
        console.error('Create note error:', error)
        return res.send({
            status: false, msg: "Error creating note", data: null
        })

    }
}


// get all note
// noteController.getAllNotes = async (req, res) => {
//     try {
//         const AllNote = await noteService.getAllNote()
//         console.log(AllNote ,"hii")
//         if (AllNote.length) {
//             return res.send({ status: true, msg:"all notes data getted",data:AllNote  })
//         }
//         return res.send({ msg: "notes are not found", data: null, status: false })
//     } catch (err) {
//         console.log(err)
//         return res.send({ status: false, data: [], error: err })
//     }
// }
// ------------------------------------------------------------------------/////////////////////

// get all note
noteController.getAllNotes = async (req, res) => {
    try {
        const { startDate, endDate, page = 1, limit = 10 } = req.query; // Get query parameters
        const paginationParams = {
            startDate,
            endDate,
            page: parseInt(page, 10),
            limit: parseInt(limit, 10)
        };

        const result = await noteService.getAllNote(paginationParams);

        if (result.notes.length) {
            return res.send({
                status: true,
                msg: "all notes data retrieved",
                data: {
                    notes: result.notes,
                    total: result.total,
                    currentPage: paginationParams.page,
                    totalPages: Math.ceil(result.total / paginationParams.limit)
                }
            });
        }
        return res.send({ msg: "notes are not found", data: null, status: false });
    } catch (err) {
        console.log(err);
        return res.send({ status: false, data: [], error: err });
    }
};

// ---------------------------------------------------------------------------////////////////
// Delete a note
noteController.deleteNote = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.send({
            status: false,
            msg: "noteID is required",
            data: null
        });
    }
    try {
        const deleteNote = await noteService.deleteNote(id);
        if (!deleteNote) {
            return res.send({
                status: false,
                msg: "note not found",
                data: null
            });
        }
        return res.send({
            status: true,
            msg: "note deleted successfully",
            data: deleteNote
        });
    } catch (error) {
        console.error('Delete note error:', error);
        return res.send({
            status: false,
            msg: "Error note transaction",
            data: null
        });
    }
};




module.exports = noteController;
