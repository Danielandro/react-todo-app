import React from 'react';

function AddTodo() {
  return (
    <form style={{ display: 'flex' }}>
      <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo ..."
      />
      <input
        type="submit"
        value="Add Todo"
        className="btn"
        style={{ flex: '1' }}
      />
    </form>
  )
}

export default AddTodo
