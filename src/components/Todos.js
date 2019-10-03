import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({ todos, toggleComplete }) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          < TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        )
        )}
      </ul>

    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;