import React, { Fragment } from 'react';
import Task from './Task'

const TasksList = props => {
    const active = props.tasks.filter(task => task.active === true);
    const done = props.tasks.filter(task => task.active !== true);
    const ActiveTask = active.map(task => <Task key={task.id} task={task}/>)
    const DoneTask = done.map(task => <Task key={task.id} task={task}/>)
    return ( 
        <Fragment>
            <h1>To Do</h1>
            <div>{ActiveTask}</div>
            <hr/>
            <h1>Done</h1>
            <div>{DoneTask}</div>
        </Fragment>
     )
}
 
export default TasksList
