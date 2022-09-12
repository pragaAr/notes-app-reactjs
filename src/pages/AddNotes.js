import React from "react";
import { addNote } from "../utils/local-data";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();
  function onaddNoteHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return <NotesInput addNote={onaddNoteHandler} />;
}

export default AddNotes;
