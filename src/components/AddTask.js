import React, { Component } from 'react';

const groups = [{id: 0,name: "important",color: "red"},{id: 1,name: "job",color: "blue"},{id: 2,name: "personal",color: "green"},{id: 3,name: "normal",color: "black"}]

class AddTask extends Component {
    state = { 

     }

    addNewTask = () => {
        console.log("added")
    } 
    render() { 
        return ( 
            <>
                <h2>Add Task</h2>
               
                <div><label htmlFor="taskValue">Task: </label><input type="tekst" id="taskValue" placeholder="add task"/></div>
                <div><label htmlFor="deadline">Completion date:</label> <input type="date" id="deadline" size="1"/></div>
                <div><label htmlFor="group">Category: </label>
                    <select id="group">
                        <option value="normal">Normal</option>
                        <option value="job">Job</option>
                        <option value="personal">Personal</option>
                        <option value="important">Improtant</option>
                    </select>
                </div>
                <button onClick={this.addNewTask}>Add</button>
                <hr />
            </>
         );
    }
}
 
export default AddTask;