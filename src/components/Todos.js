import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos(props) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {props.todos.map((todo) => (
          < TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} />
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