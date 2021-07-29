import React, { Fragment } from 'react';
import Task from './Task'
import './TaskList.css'

const TasksList = props => {
    const active = props.tasks.filter(task => task.active === true);
    const done = props.tasks.filter(task => task.active !== true);
    const ActiveTask = active.map(task => <Task key={task.id} task={task} handleCheck={props.handleCheck} handleRemove={props.handleRemove}/>)
    const DoneTask = done.map(task => <Task key={task.id} task={task} handleRemove={props.handleRemove}/>)

    return ( 
        <Fragment>
            <div className="listSection">
            <h1>To Do ({ActiveTask.length})</h1>
                <div className="list">   
                   {ActiveTask.length > 0 ? ActiveTask : <p>Find yourself something to do!</p>}
                </div>
            </div>
            <hr/>
  
            <div className="listSection">
            <h1>Done ({DoneTask.length})</h1>
                <div className="list">
                    {DoneTask}
                </div>        
            </div>
            
        </Fragment>
     )
}
 
export default TasksList
