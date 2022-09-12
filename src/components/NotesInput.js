import React from "react";
import { FiCheck } from "react-icons/fi";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onClickEventHandler = this.onClickEventHandler.bind(this);
  }

  onTitleInputHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onClickEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Catatan rahasia..."
            contentEditable
            onInput={this.onTitleInputHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="sebenarnya saya adalah.."
            contentEditable
            onInput={this.onBodyInputHandler}
          />
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Simpan"
            onClick={this.onClickEventHandler}
          >
            <FiCheck />
          </button>
        </div>
      </section>
    );
  }
}

export default NotesInput;
