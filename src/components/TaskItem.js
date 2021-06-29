import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import tasksQuery from '../graphql/queryTasks';
import deleteTaskMutation from '../graphql/deleteTask';
import updateTaskMutation from '../graphql/updateTask';

const TaskItem = ({ taskText, taskID }) => {

    const [text, setText] = useState(taskText);
    const [editMode, setEditMode] = useState(false);

    const { data } = useQuery(tasksQuery);

    const [deleteTask] = useMutation(deleteTaskMutation, { refetchQueries: [{query: tasksQuery}]});

    const removeTask = () => {
        deleteTask({ variables: { id: taskID }})
    }

    const [updateTask] = useMutation(updateTaskMutation, { refetchQueries: [{query: tasksQuery}]});
    
    const editTask = () => {
        setEditMode(true);
    }
    
    const handleEditInput = (event) => {
        setText(event.target.value);
    }

    const resubmit = () => {
        data.tasks.forEach((task) => {
            if(task.id === taskID){
                updateTask({ variables: { id: task.id, text: text }})
                setEditMode(false);
            }
        })
    }

    if(editMode === false) {
        return (
                <li>
                    {taskText}
                    <button onClick={editTask}>Edit</button>
                    <button onClick={removeTask} key={'remove'+taskID}>Remove</button>
                </li>
        );
    } else {
        return (
                <li>
                    <textarea onChange={handleEditInput} defaultValue={text}></textarea>
                    <button onClick={resubmit}>Resubmit</button>
                    <button onClick={removeTask}>Remove</button>
                </li>
        )
    }
}

export default TaskItem;