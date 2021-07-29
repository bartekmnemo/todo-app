import React from 'react';
import './Task.css'

const Task = props => {
    const style = {
        color: props.task.category.color
    }

    if(props.task.active){
        return ( 
            <div className="item">
              <div className="leftSection">
                 <p className="taskP" style={style}><strong>{props.task.text}</strong>, deadline: {props.task.date} </p>
              </div>
              <div className="rightSection">
                <button onClick={() => props.handleCheck(props.task.id)}><i className="fas fa-check"></i></button> <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button>
              </div>
            </div>
         );
    }
    else {
        const time = new Date().toLocaleDateString()
        return ( 
            <div className="item">
                 <div className="leftSection">
                     <p className="taskP" style={style}><strong>{props.task.text}</strong> - {time}</p>
                </div>
                <div className="rightSection">
                    <button onClick={() => props.handleRemove(props.task.id)}><i className="fas fa-trash-alt"></i></button>
               </div>
            </div>
         );
    }
    }
    
 
export default Task
