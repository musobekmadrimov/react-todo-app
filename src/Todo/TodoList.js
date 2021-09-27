import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'


function TodoList(props) {
    return(
        <ul className="list">
            {props.todos.map((todo, index) => {
                return <TodoItem eachTodo={todo} key={todo.id} index={index} sendDataOnChange={props.sendDataOnToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    sendDataOnToggle: PropTypes.func.isRequired
}

export default TodoList