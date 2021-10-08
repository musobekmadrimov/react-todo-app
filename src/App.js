import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: true, title: "Buy butter" },
    { id: 3, completed: false, title: "Buy milk" },
  ]);

  function changeCompletedState(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then((response) => response.json())
  //     .then((todos) => setTodos(todos));
  // }, []);

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React To-Do App</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} sendDataOnToggle={changeCompletedState} />
        ) : (
          <p className="no-todos">No To-dos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
