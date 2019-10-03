import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      paddingBottom: '10px',
      borderBottom: '5px #ddd solid',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  return (
    <div>
      <p style={getStyle()}>
        <input type="checkbox" onChange={() => props.toggleComplete(props.todo.id)} />{' '}
        {props.todo.title}
      </p>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;