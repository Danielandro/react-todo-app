import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuidv4 from 'uuid/v4'; // generate unique IDs
import Header from './components/layouts/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import './App.css';

function App() {
  // Use hooks to set state
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Complete homework',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Lived a life',
      completed: false
    },
    {
      id: uuidv4(),
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

  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            path="/"
            render={props => (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  toggleComplete={toggleComplete}
                  removeTodo={removeTodo}
                />
              </>
            )}
          />

        </div>
      </div>
    </Router>
  );
}

export default App;
