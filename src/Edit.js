import React, { useState } from 'react';

export const Edit = ({ AddTodo }) => {
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    AddTodo(text);
  }

  return(
    <div>
      <form onSubmit={submitForm}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
        <button>Add</button>
      </form>
    </div>
  )
};