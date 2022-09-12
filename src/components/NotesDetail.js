import React from "react";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import ActiveButton from "../components/ActiveButton";

function NotesDetail({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  onActive,
  archived,
}) {
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        {archived ? (
          <ActiveButton id={id} onActive={onActive} />
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )}
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </section>
  );
}

export default NotesDetail;
