import React, { useState } from 'react';

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, done: false }]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const markAsDone = (index) => {
        setTasks(tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t));
    };

    return (
        <div className="todo">
            <h1>To Do List</h1>
            <input 
                type="text" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task" 
            />
            <button  className='add_but'onClick={addTask}>Add</button>
            <table className='tab'>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                            <td>{t.text}</td>
                            <td>
                                <button className='done_but' onClick={() => markAsDone(index)}>
                                    {t.done ? 'Undo' : 'Completed'}
                                </button>
                                <button className='delete_but' onClick={() => deleteTask(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Todo;
