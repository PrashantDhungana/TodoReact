import React from 'react';
import {TodoItem} from './TodoItem';


export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="text-primary"> <center>Recent Todos</center></h1>
            {props.todos.length === 0 ? "There are no Items Left !":
            props.todos.map((todo)=>{
                return(
                <>
                 <TodoItem todo={todo} key={todo.id} onDelete={()=>{props.onDelete(todo)}} />
                <br />
                </>
                )
            })
            }
        </div>
    )
}
