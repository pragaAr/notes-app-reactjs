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
    if (this.state.title.length > 4 && this.state.body.length > 4) {
      event.preventDefault();
      this.props.addNote(this.state);
    } else {
      alert("judul dan isi catatan minimal 5 karakter!");
    }
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Judul catatan rahasia..."
            contentEditable
            onInput={this.onTitleInputHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Isi catatan rahasia.."
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
