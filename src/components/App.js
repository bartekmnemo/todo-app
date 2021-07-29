import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header'
import AddTask from './AddTask'
import TasksList from './TasksList'
import Footer from './Footer'

let idCounter = 3;

class App extends Component {

  state = {tasks: []}

  addTast = (value, date, category) => {
    console.log(value, date, category)
    let group = {}
    if(category === 'normal') {
      group = {name: "normal", color: "black"}
    } else if(category === 'personal') {
      group = {name: "personal", color: "green"}
    } else if(category === 'job') {
      group = {name: "job", color: "blue"}
    } else if(category === 'important') {
      group = {name: "important", color: "red"}
    }
    // console.log(group)
    const tasks = [...this.state.tasks].concat({
        id: idCounter,
        text: value,
        category: {name: group.name,color: group.color},
        date,
        active: true,
        finishDate: null
    })
    this.setState({
      tasks
    })
    idCounter++;
    console.log(idCounter)
  }

  handleCheck = id => {
    console.log(id)
    const tasks = [...this.state.tasks]

    tasks.forEach(task => {
      if(task.id === id) task.active = false
    })
    this.setState({
      tasks
    })
  }

  handleRemove = id => {
    console.log(id)
    const tasks = [...this.state.tasks].filter( task => task.id !== id)
    this.setState({
      tasks
    })
  }
  render() { 
    return ( 
        <div className="App">
          <Header/>
          <AddTask tasks={this.state.tasks} addTask={this.addTast}/>
          <TasksList tasks={this.state.tasks} handleRemove={this.handleRemove} handleCheck={this.handleCheck}/>
          <Footer/>
        </div>
     );
  }
}
 
export default App;