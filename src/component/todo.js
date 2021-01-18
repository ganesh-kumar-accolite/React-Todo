
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function CheckboxClick() {
    toggleComplete(todo.id);
  }

  function RemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{display:"flex",alignContent:"center",textAlign:"center"}}>
      <input type="checkbox" onClick={CheckboxClick} />
      <li 
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </li>
      <button onClick={RemoveClick}>X</button>
    </div>
  );
}

export default Todo;