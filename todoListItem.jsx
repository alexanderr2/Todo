import React from 'react';

const TodoListItem = (props) => {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.description}</p>
        </div>
    );
}

export default TodoListItem;