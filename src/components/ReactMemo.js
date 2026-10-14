import React from 'react'

const ReactMemo = React.memo(function ReactMemo({ todo})  {
  return (
    <div>
        <h2>Todo List</h2>

        {todo.map((todo, index)=>(
            <div key={`${todo}-${index}`}>{todo}</div>
        ))}
    </div>
  )
});

export default ReactMemo