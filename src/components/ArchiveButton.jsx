import React from "react";

export const ArchiveButton = ({ id, onArchive }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Archive
    </button>
  );
};
