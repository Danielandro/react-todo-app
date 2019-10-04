import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault(); // stop form submitting to file
    addTodo(title);
    setTitle("");
  }


  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo ..."
        value={title}
        onChange={handleInput}
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
