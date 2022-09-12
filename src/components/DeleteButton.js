import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();
  function onDeleteClick() {
    navigate("/");
  }

  return (
    <button
      className="action"
      type="button"
      title="Hapus"
      onClick={() => onDeleteClick(onDelete(id))}
    >
      <AiFillDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
