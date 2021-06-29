import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import tasksQuery from '../graphql/queryTasks';
import TaskItem from './TaskItem';

const TaskFeed = ({ shouldRefresh }) => {

    const { data, refetch } = useQuery(tasksQuery);

    useEffect(() => {
        if (shouldRefresh === true) {
          refetch()
        }
    }, [shouldRefresh])

    return (
        <ol>
            {data && (
            data.tasks.map((task) => {
                return(
                    <TaskItem 
                        taskText={task.text} 
                        taskID={task.id} 
                        shouldRefresh={shouldRefresh}
                        key={task.id}
                    />
                )
            }))}
        </ol>       
    );
}

export default TaskFeed;