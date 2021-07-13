import './App.css';
import {Header} from './Components/Header';
import {Todos} from './Components/Todos';
import {Footer} from './Components/Footer';
import {AddTodo} from './Components/AddTodo';

import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("Delete");
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  };

  const addTodo = (title,desc)=>{
    let id;
    if(todos.length == 0)
      id = 0;
    else
      id = todos[todos.length-1].id + 1;
    const myTodo = {
      id: id,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos]= useState([

  ]);
  return (
  <>
   <Header />
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer />
  </>
  );
}

export default App;
