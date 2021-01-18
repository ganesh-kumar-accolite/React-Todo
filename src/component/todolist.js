
import React, { Component } from "react";
import Todo from "./todo";

class TodoList extends Component {
    render(){
    const { todos, removeTodo, toggleComplete }=this.props;
    todos.sort((a, b) => a.date > b.date);
     return (
        <ul >
        {todos.map(todo => (
            <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
        />
        ))}
        </ul>
        );
    }
}

export default TodoList;