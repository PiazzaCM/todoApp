import { useState } from "react";

export const TodoForm = ({setTodoList, todoList}) => {

    const [text, setText] = useState("")


    return (
        <>
            <h3>New Todo</h3>
            <input
                type="text"
                placeholder="Add Todo"
                name="todo"
                className="form-control"
                value={text}
                onChange={e => setText(e.target.value)}
                // Evento cuando presiona tecla Enter en ASCII
                onKeyUpCapture={( e )=> {
                    if(e.key !== 'Enter') return;
    
                    setTodoList([
                        ...todoList,
                        {
                            id: new Date().getTime(),
                            text: text,
                            done: false
                        }
                    ])
    
                    setText("")
                }}
            />  
        </>
    )
}