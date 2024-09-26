import React from "react";
import { DeleteButton } from "./DeleteButton";
import { ArchiveButton } from "./ArchiveButton";

export const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
}) => {
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-En", options);
  };

  const formattedDate = formatDate(createdAt);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">{title}</div>
        <div className="note-item__date">{formattedDate}</div>
        <div className="note-item__body">{body}</div>
      </div>

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
};
