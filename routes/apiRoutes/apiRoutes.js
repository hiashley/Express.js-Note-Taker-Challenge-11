const router = require('express').Router();
const { newNote, deleteNote } = require('../../lib/notes');
var { notesList } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
  var results = notesList;
  res.json(results);
});

router.post('/notes', (req, res) => {
  if (notesList) {
    req.body.id = notesList.length.toString();
  } else {
    req.body.id = 0
  }
  res.json(newNote(req.body, notesList));
});

router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesList = await deleteNote(id, notesList);
  res.json(notesList);
});

module.exports = router;