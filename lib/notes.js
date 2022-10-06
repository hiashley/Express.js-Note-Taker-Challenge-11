const fs = require('fs');
const path = require('path');

function newNote (body, notesList) {
  const note = body;
  notesList.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesList }, null, 2)
  );
  return note;
};

function deleteNote (id, notes) {
  var notesList = notes.filter(el => {
    if (el.id == id) {
      return false;
    } else {
      return true;
    };
  });

  var index = 0;
  notesList.forEach(notes => {
    note.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({notesList}, null, 2)
  );
  return notesList;
};

module.exports = {
  newNote,
  deleteNote
};