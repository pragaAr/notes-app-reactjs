import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes }) {
  if (notes.length === 0) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Tidak ada catatan</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((notes) => (
        <NotesItem key={notes.id} id={notes.id} {...notes} />
      ))}
    </section>
  );
}

export default NotesList;
