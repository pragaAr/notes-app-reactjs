import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";

function NotesItem({ id, title, body, createdAt }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}

export default NotesItem;
