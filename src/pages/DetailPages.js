import React from "react";
import { useParams } from "react-router-dom";
import {
  getAllNotes,
  getActiveNotes,
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import NotesDetail from "../components/NotesDetail";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPages id={String(id)} />;
}

class DetailPages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onActiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  render() {
    if (this.state.notes === null) {
      return <p>Catatan kosong!</p>;
    }

    return (
      <NotesDetail
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        onActive={this.onActiveHandler}
        {...this.state.notes}
      />
    );
  }
}

export default DetailPageWrapper;
