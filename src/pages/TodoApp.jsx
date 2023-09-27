import { useState } from "react";
import { TodoForm } from "../components/TodoForm";

export const TodoApp = () => {

    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');
    
  
  
    const inputChange = ({ target }) => {
      setTodo(target.value)
    }
  
    // Recorrer la lista de Todos y modificar la propiedad done
    const completeTodo = ({ target }) => {
        const todos = todoList.map( todo => {
          if(todo.id === +target.id){
            todo.done = !todo.done
            return todo;
          }
          return todo;
        })
  
        setTodoList(todos);
    }
  
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
            <TodoForm
              inputChange={inputChange}
              setTodoList={setTodoList}
              todo={todo}
              todoList={todoList}
            />
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>

            <ul className="list-unstyled">
              {
  
                (todoList.length === 0)
                ? 
                (
                  <li className="alert alert-info">No hay todos</li>
                )
                :
                (
                  todoList.map( todo => (
                    <li 
                    key={todo.id}
                    className={`d-flex justify-content-between mb-2 alert ${(todo.done) ? 'alert-success' : 'alert-warning'}`}>
                      <span>{ todo.text}</span> 
                      <button 
                        className={`btn btn-sm ${(todo.done)? 'btn-success': 'btn-warning' }`}
                        id={todo.id}
                        onClick={ completeTodo }
                      >
                        {(todo.done)? 'Completada' : 'Completar'}
                      </button>
                    </li>
                  ))
                )
  
  
              }
             
            </ul>
  
          </div>
        </div>
      </div>
    )
  }