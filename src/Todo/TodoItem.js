import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  console.log("todo", props.eachTodo);

  return (
    <li>
      <span>
        <input
          type="checkbox"
          onChange={() => {
            props.sendDataOnChange(props.eachTodo.id);
          }}
        />
        <strong>{props.index + 1}</strong>.&nbsp;{props.eachTodo.title}
      </span>

      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  eachTodo: PropTypes.object.isRequired,
  index: PropTypes.number,
  sendDataOnChange: PropTypes.func.isRequired,
};

export default TodoItem;
