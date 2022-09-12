import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function AddButton() {
  const navigate = useNavigate();
  function onAddNotes() {
    navigate("/add");
  }

  return (
    <div className="homepage__action">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={onAddNotes}
      >
        <FiPlus />
      </button>
    </div>
  );
}

export default AddButton;
