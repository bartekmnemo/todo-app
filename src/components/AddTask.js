import React, { Component } from 'react';

const dateToday = new Date().toISOString().slice(0,10);

class AddTask extends Component {
    state = { 
        value: '',
        date: dateToday,
        category: 'normal',
     }

    handleClick = e => {
        if(e.target.type === "text") {
            this.setState({
                value: e.target.value
            })
        } else if(e.target.type === "date")
        {
            this.setState({
                date: e.target.value
            })
        } else if(e.target.type === "select-one")
        {
            this.setState({
                category: e.target.value
            })
        }
    } 

    addNewTask = e => {
        e.preventDefault()
       const {value, date, category} = this.state
    //    const newList = 
       if(value && date && category) {
           this.props.addTask(value, date, category)

           this.setState({
            value: '',
            date: dateToday,
            category: 'normal',
       })
       }
    } 
    render() { 
        const maxDate = (dateToday.slice(0,4) * 1 + 1) + "-12-31";
        return ( 
            <div className="addTaskSection">
            
                <h2>Add Task</h2>
               <form onSubmit>
                    <div><label htmlFor="taskValue">Task: </label><input type="text" id="taskValue" value={this.state.value} onChange={this.handleClick} placeholder="add task"/></div>
                    <div><label htmlFor="deadline">Completion date:</label> <input type="date" id="deadline" value={this.state.date}  onChange={this.handleClick} min={dateToday} max={maxDate}/></div>
                    <div><label htmlFor="group">Category: </label>
                        <select id="group" value={this.state.category}  onChange={this.handleClick}>
                            <option value="normal">Normal</option>
                            <option value="job">Job</option>
                            <option value="personal">Personal</option>
                            <option value="important">Important</option>
                        </select>
                    </div>
                    <button onClick={this.addNewTask}>Add</button>
                </form>
                <hr />
            </div>
         );
    }
}
 
export default AddTask;