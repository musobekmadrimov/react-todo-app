import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const classes = [];
  const { removeTodo } = useContext(Context);

  if (props.eachTodo.completed) {
    classes.push("done");
  }

  return (
    <li>
      <span className={classes.join(" ")}>
        <div className="checkboxDiv">
          <input
            type="checkbox"
            onChange={() => {
              props.sendDataOnChange(props.eachTodo.id);
            }}
            checked={props.eachTodo.completed}
          />
        </div>
        <strong>{`${props.index + 1}.`}&nbsp;</strong>
        
        {props.eachTodo.title}
      </span>

      <button
        onClick={() => removeTodo(props.eachTodo.id)}
        className="noselect"
      >
        <span className="text"><FontAwesomeIcon icon={faTrash} /></span>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </span>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  eachTodo: PropTypes.object.isRequired,
  index: PropTypes.number,
  sendDataOnChange: PropTypes.func.isRequired,
};

export default TodoItem;
