import React from 'react';

const Task = props => {
    const style = {
        color: props.task.category.color
    }

    if(props.task.active){
        return ( 
            <p style={style}><strong>{props.task.text}</strong>, czas do {props.task.date} <button onClick={() => props.handleCheck(props.task.id)}><i className="fas fa-check"></i></button> <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button></p>
         );
    }
    else {
        const time = new Date().toLocaleDateString()
        return ( 
            <p style={style}><strong>{props.task.text}</strong> - {time} <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button></p>
         );
    }
    }
    
 
export default Task
