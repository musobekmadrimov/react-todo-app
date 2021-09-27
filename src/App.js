import React from 'react';
import TodoList from './Todo/TodoList';


function App() {
  let todos = [
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy butter'},
    {id: 3, completed: false, title: 'Buy milk'},
  ]

  function changeCompletedState(id){
    todos = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    
  }

  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList todos={todos} sendDataOnToggle={changeCompletedState}/>
    </div>
  );
}

export default App;
