
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    date: new Date()
  });

  function InputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function DateChange(e){
    setTodo({...todo,date:e.target.value});
  }
  function Submit(e) {
    e.preventDefault(); 
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={Submit}>
      <label for="task">Task</label>
      <input
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={InputChange}
      /><br></br>
      <label for="d">Deadline</label>
      <input type="date" onChange={DateChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;