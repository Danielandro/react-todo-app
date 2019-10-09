import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  const getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '20px',
      borderBottom: '5px #ddd solid',
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }

  const btnStyle = () => {
    return {
      background: '#ffcccc',
      color: '#000',
      border: '2px #000 solid',
      borderRadius: '50%',
      padding: '5px 9px',
      cursor: 'pointer',
      float: 'right',
      fontWeight: 'bold',
      marginRight: '10px'
    }
  }

  return (
    <div>
      <p style={getStyle()}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo.id)}
        />
        {' '}{todo.title}
        <button
          style={btnStyle()}
          onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </p>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoItem;
