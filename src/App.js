import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  const DefaultTodos = [
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
  ]

  const [todos] = useState(DefaultTodos)

  return (
    <div className="App">
      <h1>Welcome To React</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
