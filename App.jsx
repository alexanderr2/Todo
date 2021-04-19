import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import CreateTodo from './createTodo/CreateTodo';
import TodoList from './todoList/todoList';
import TodoDetails from './todoDetails/todoDetails';
import EditTodo from './editTodo/editTodo';
import DeleteTodo from './deleteTodo/deleteTodo';

function App() {
  const [selectedTodo, setSelectedTodo] = useState();
  return (
    <div className="App">
      <aside className="leftContent">
        <h2>Dina Todos</h2> 
        <CreateTodo /> 
        <TodoList selectedTodo={selectedTodo} onTodoSelected={setSelectedTodo}/>
      </aside>
      <main className="rightContent">
        <h2>Todo Detaljer</h2>
        {selectedTodo && <TodoDetails selectedTodo={selectedTodo}/>}
        <DeleteTodo /> <EditTodo />
      </main>
    </div>
  );
}

export default App;
