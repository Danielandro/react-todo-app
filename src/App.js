import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuidv4 from 'uuid/v4'; // generate unique IDs
import Header from './components/layouts/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  // Use hooks to set state
  const [todos, setTodos] = useState([])

  // fetch todos on componentDidMount
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

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
    fetch('http://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(newTodo => {
        setTodos([...todos, newTodo])
      })
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact path="/"
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
          <Route
            path="/about"
            component={About}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
