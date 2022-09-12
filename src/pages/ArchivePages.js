import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchNotes from "../components/SearchNotes";
import { getArchivedNotes } from "../utils/local-data";

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePages defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
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
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchNotes
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={notes} />
      </section>
    );
  }
}

export default ArchivedPageWrapper;
