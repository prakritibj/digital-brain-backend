const express = require("express")
const noteController = require("./controller.note")
const router = express.Router()
  router.post("/create" ,noteController.createNote)
  router.get("/getAllnote", noteController.getAllNotes)
  router.delete("/delete/:id" ,noteController.deleteNote)
  module.exports = router