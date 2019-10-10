import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({ todos, toggleTodoComplete, removeTodo }) {
  return (
    <div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>

    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default Todos;
