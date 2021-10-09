import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      props.onCreate(value);
      setValue("");
    }
  }

  return (
    <form className="addForm" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="custom-btn btn-6">
        
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
