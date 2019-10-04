import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({ todos, toggleComplete, removeTodo }) {
  return (
    <div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>

    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
