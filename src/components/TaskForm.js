import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import createTaskMutation from '../graphql/createTask';



const TaskForm = ({ onTaskSubmission }) => {

    const [task, setTask] = useState('');
    const [createTask, {data}] = useMutation(createTaskMutation);

    useEffect(() => {
        if (data != null) {
            onTaskSubmission()
        }
    }, [data])

    const handleInput = (event) => {
        setTask(event.target.value)
    };

    const submitForm = (event) => {

        event.preventDefault();
    
        createTask({ variables: { text: task }});
    
        setTask('');

        event.target[0].value = '';
    
    };

    return (
        <div>
            <h1>
            Task Application
            </h1>
            <form onSubmit={submitForm}>
                <label>Enter Task</label>
                <input onChange={handleInput} value={task.text}></input>
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm;