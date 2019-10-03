import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Complete homework',
      completed: false
    },
    {
      id: 2,
      title: 'Lived a life',
      completed: false
    },
    {
      id: 3,
      title: 'Walked to the farm',
      completed: false
    }
  ])

  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })

    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Welcome To React</h1>
      <Todos todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
