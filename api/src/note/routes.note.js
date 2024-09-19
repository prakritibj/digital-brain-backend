const express = require("express")
const noteController = require("./controller.note")
const validate = require("../../middlewares/Validation.middleware")
const {noteValidationSchema} = require("../validationSchema/notes.validation")
const router = express.Router()
  router.post("/create", validate(noteValidationSchema),noteController.createNote)
  router.get("/getAllnote", noteController.getAllNotes)
  router.delete("/delete/:id" ,noteController.deleteNote)
  module.exports = router