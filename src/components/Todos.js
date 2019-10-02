import React from 'react';

function Todos(props) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li>
              {todo.title}
            </li>
          )
        }
        )}
      </ul>

    </div>
  )
}

export default Todos;