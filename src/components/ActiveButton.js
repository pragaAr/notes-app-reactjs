import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { BiArchiveOut } from "react-icons/bi";

function ActiveButton({ id, onActive }) {
  const navigate = useNavigate();
  function onActiveClick() {
    navigate("/");
  }

  return (
    <button
      className="action"
      type="button"
      title="Aktifkan"
      onClick={() => onActiveClick(onActive(id))}
    >
      <BiArchiveOut />
    </button>
  );
}

ActiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
};

export default ActiveButton;
