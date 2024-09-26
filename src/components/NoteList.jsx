import React from "react";
import { NoteItem } from "./NoteItem";

export const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <section>
      <h2>My Notes</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    </section>
  );
};
