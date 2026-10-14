import React, { useEffect, useState } from 'react'
import UseMemo  from './UseMemo';
import ReactMemo from "./ReactMemo"

const App = () => {
    const [todo, setTodo] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Counter: ${counter}`;
    }, [counter])

    const addTodo = ()=>{
        setTodo((prevTodo) => [...prevTodo, "New todo"])
    };

    const addCustomTodo = (task)=>{
        setTodo((prevTodo) => [...prevTodo, task])
    }

  return (
    <div>
        <h1>Task Management App</h1>

        <button onClick={addTodo}>Add Todo</button>

        <button onClick={()=>setCounter((prev) => prev +1)}>
            Increment: {counter}
        </button>

        <ReactMemo todo={todo} />

        <UseMemo onSubmit={addCustomTodo}/>
    </div>
  )
}

export default App