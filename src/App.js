import React, { useState, useEffect } from 'react';
import './App.css';
import TaskFeed from './components/TaskFeed';
import TaskForm from './components/TaskForm';

const App = () => {
  
  let [shouldRefresh, setShouldRefresh] = useState(false)

  useEffect(() => {
    if (shouldRefresh === true) {
        setShouldRefresh(false)
    }
  }, [shouldRefresh])

  return (
    <div className="App">
      <header className="App-header">
        <TaskForm 
          onTaskSubmission={() => { setShouldRefresh(true) }}
        />
        <TaskFeed 
          shouldRefresh={shouldRefresh}
        />
      </header>
    </div>
  );
}

export default App;
