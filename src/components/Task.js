import React from 'react';

const Task = props => {
    const style = {
        color: props.task.color
    }
    return ( 
        <p style={style}><strong>{props.task.text}</strong>, czas do {props.task.date} <button><i className="fas fa-check"></i></button> <button><i className="fas fa-trash-alt"></i></button></p>
     );
}
 
export default Task
