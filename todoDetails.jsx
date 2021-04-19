import React from 'react';

const TodoDetails = (props) => {
    return (
        <section>
            <h3>{props.selectedTodo.title}</h3>
            <p>{props.selectedTodo.description}</p>
        </section>
    );
}

export default TodoDetails;