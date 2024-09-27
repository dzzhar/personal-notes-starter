import React from "react";
import { NoteItem } from "./NoteItem";

export const NoteArchive = ({ archivedNotes, onDelete }) => {
  return (
    <section>
      <h2>Archive</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">No Notes</p>
        ) : (
          archivedNotes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                {...note}
                onDelete={() => onDelete(note.id, true)}
              />
            );
          })
        )}
      </div>
    </section>
  );
};
