import { useState } from "react"
import { AddTodo } from "../components/AddTodo"
import { TodoListItem } from "../components/TodoListItem"

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const inputChange = ({ target }) => {
    setTodo(target.value);
  };

  const completeTodo = ({ target }) => {
    const todos = todoList.map((todo) => {
      if (todo.id === +target.id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });

    setTodoList(todos);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <AddTodo
            inputChange={inputChange}
            setTodoList={setTodoList}
            todo={todo}
            todoList={todoList}
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <TodoListItem todoList={todoList} completeTodo={completeTodo} />
        </div>
      </div>
    </div>
  )
}
