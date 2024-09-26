import React from "react";

export class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // initiate state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addBody(this.state);
  }

  render() {
    const charLimit = 50;
    const remainingChars = charLimit - this.state.title.length;

    return (
      <div className="note-input">
        <h2>New Notes</h2>

        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Remaining Characters: {remainingChars}
          </p>

          <input
            type="text"
            name="title"
            maxLength="50"
            className="note-input__title"
            placeholder="This is the title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            type="text"
            name="body"
            className="note-input__body"
            placeholder="Write your notes here..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          />

          <button type="submit">Make a notes</button>
        </form>
      </div>
    );
  }
}
