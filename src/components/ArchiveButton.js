import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { BiArchiveIn } from "react-icons/bi";

function ArchiveButton({ id, onArchive }) {
  const navigate = useNavigate();
  function onArchiveClick() {
    navigate("/");
  }

  return (
    <button
      className="action"
      type="button"
      title="Arsipkan"
      onClick={() => onArchiveClick(onArchive(id))}
    >
      <BiArchiveIn />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
