import React, { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddTodo"));
      }, 3500);
    })
);

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

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
        <Modal />
        <React.Suspense fallback={<p>Lazy Loading Component...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} sendDataOnToggle={changeCompletedState} />
        ) : loading ? null : (
          <p className="no-todos">No To-dos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
