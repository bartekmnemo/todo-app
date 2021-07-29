import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TasksList from './TasksList'

let idCounter = 3;

class App extends Component {

  state = {
    tasks: [
      {
      id: 0,
      text: "Wyjdź z psem",
      category: {name: "important",color: "red"},
      date: "2021-10-22",
      active: false,
      finishDate: null
      },
      {
        id: 1,
        text: "Poleć na marsa",
        category: {name: "job",color: "blue"},
        date: "2021-09-02",
        active: true,
        finishDate: null
      },{
        id: 2,
        text: "Zbuduj wehikuł czasu",
        category: {name: "personal",color: "green"},
        date: "2021-07-14",
        active: true,
        finishDate: null
      }]}

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
          <h1>Plan your day just here, just now!</h1>
          <q>The secret of getting ahead is getting started.</q>
          <AddTask tasks={this.state.tasks} addTask={this.addTast}/>
          <TasksList tasks={this.state.tasks} handleRemove={this.handleRemove} handleCheck={this.handleCheck}/>
          <footer>designed and created by Bartosz Zięcina</footer>
        </div>
     );
  }
}
 
export default App;