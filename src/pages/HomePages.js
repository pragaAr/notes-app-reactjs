import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchNotes from "../components/SearchNotes";
import AddButton from "../components/AddButton";
import {
  // getAllNotes,
  getActiveNotes,
  // getArchivedNotes,
  // deleteNote,
  // editNote,
  // getNote,
  // archiveNote,
  // unarchiveNote,
  // addNote,
} from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePages defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((notes) => {
      return notes.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchNotes
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={notes} />
        <AddButton />
      </section>
    );
  }
}

export default HomePageWrapper;
