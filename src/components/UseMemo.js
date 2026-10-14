import React, { useMemo, useState } from 'react'

const UseMemo = ({onSubmit}) => {
    const [task, setTask] = useState("");
    const [error, setError] = useState("");

    const taskLength = useMemo(() => task.trim().length, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskLength <= 5) {
            setError("Task must contains more than 5 characters.");
            return;
        }

        onSubmit(task.trim());
        setTask("");
        setError("");
    };

  return (
    <div>
        <h2>Add Custom Task</h2>

        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Enter a task'
            />

            <button type='submit'>Submit</button>
        </form>

        {error && <p role='alert'>{error}</p>}

    </div>
  )
}

export default UseMemo