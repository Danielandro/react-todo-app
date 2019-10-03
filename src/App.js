import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  // Use hooks to set state
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

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  // Delete Todo
  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className="App">
      <h1>Welcome To React</h1>
      <Todos todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
