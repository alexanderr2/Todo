import React, { useEffect, useState } from 'react';
import todoService from '../todoService/todoService';
import TodoListItem from "./todoListItem";
import './todoList.css';

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const result = await todoService.getTodos();
    setTodos(result);
  }

  useEffect(() => {
    getTodos();         //2:42:00 lektion nr6 react.
  }, []);

  const handleTodoClicked = (todo) =>{
    if(props.onTodoSelected){
      props.onTodoSelected(todo);
    }
  }

  const selectedTodoId = props.selectedTodo ? props.selectedTodo.id : -1;

  return (
    <ul className="todoList">
      {todos.map((todo) => ( 
       <li className={selectedTodoId === todo.id ? "selected" : ""} key={todo.id} onClick={() => handleTodoClicked(todo)}>
        <TodoListItem todo={todo} />
       </li>
      ))} 
    </ul> //title={todo.title} completed={todo.description}
  );
}

export default TodoList;