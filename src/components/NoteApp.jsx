import React from "react";
import { getInitialData } from "../utils";
import { NoteList } from "./NoteList";
import { NoteInput } from "./NoteInput";
import { NoteArchive } from "./NoteArchive";

export class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id, fromArchived = false) {
    if (fromArchived) {
      const archivedNotes = this.state.archivedNotes.filter(
        (note) => note.id !== id
      );
      this.setState({ archivedNotes });
    } else {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
  }

  onArchiveHandler(id) {
    const noteToArchive = this.state.notes.find((note) => note.id === id);
    if (noteToArchive) {
      this.setState((prevState) => {
        const notes = prevState.notes.filter((note) => note.id !== id);
        return {
          notes,
          archivedNotes: [...prevState.archivedNotes, noteToArchive],
        };
      });
    }
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <main>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input type="search" placeholder="Find Notes ..." />
          </div>
        </div>
        <div className="note-app__body">
          <NoteInput addBody={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NoteArchive
            archivedNotes={this.state.archivedNotes}
            onDelete={(id) => this.onDeleteHandler(id, true)}
          />
        </div>
      </main>
    );
  }
}
