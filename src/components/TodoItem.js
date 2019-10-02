import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <p>{props.todo.title}</p>
    </div>
  )
}

export default TodoItem;