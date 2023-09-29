import React from "react"

export const TodoListItem = ({ todoList, completeTodo }) => {
    return (
        <ul className="list-unstyled">
            {todoList.map((todo) => (
                <li
                    key={todo.id}
                    className={`d-flex justify-content-between mb-2 alert ${(todo.done) ? 'alert-success' : 'alert-warning'}`}>
                    <span>{todo.text}</span>
                    <button
                        className={`btn btn-sm ${(todo.done) ? 'btn-success' : 'btn-warning'}`}
                        id={todo.id}
                        onClick={completeTodo}
                    >
                        {(todo.done) ? 'Completada' : 'Completar'}
                    </button>
                </li>
            ))}
        </ul>
    );
}
