import React from 'react';
import './Task.css'

const Task = props => {
    const style = {
        color: props.task.category.color
    }

    if(props.task.active){
        return ( 
            <div className="item">
              <p style={style}><strong>{props.task.text}</strong>, czas do {props.task.date} </p> <button onClick={() => props.handleCheck(props.task.id)}><i className="fas fa-check"></i></button> <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
         );
    }
    else {
        const time = new Date().toLocaleDateString()
        return ( 
            <div className="item">
              <p style={style}><strong>{props.task.text}</strong> - {time}</p> <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
         );
    }
    }
    
 
export default Task
