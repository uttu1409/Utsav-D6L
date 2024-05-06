import React, { useState } from 'react'

const TODO = () => {
   const [todo,setTodo]=useState([])
   const [input,setInput]=useState("")
  const handleChange=(e)=>{
       setInput(e.target.value)
       
  }

  const addTodo=()=>{
    if(input!="")
    setTodo([...todo,input])
    setInput("")
  }

  const deleteTodo = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  }

  const updateTodo =(index)=>{
    setInput(todo[index])
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);

  }

  return (
    <>
    <h2>TODO LIST:</h2>
    <div>
    <input  type="text" onChange={handleChange} value={input}/>
    <button onClick={addTodo}>Add todo</button>
    </div>

    {
       <ul>
        {todo.map((todo, i) => (
          <li key={i} style={{ listStyleType: 'none' }}>
            {i}
            {todo}
            <button onClick={() => deleteTodo(i)}>Delete </button>
            <button onClick={() => updateTodo(i)}>Update </button>
          </li>
        ))}
      </ul>
      
    }


    </>
  )
}

export default TODO
