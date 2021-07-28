import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TasksList from './TasksList'

class App extends Component {
// {id: 0,name: "important",color: "red"},{id: 1,name: "job",color: "blue"},{id: 2,name: "personal",color: "green"}
  state = {
    tasks: [
      {
      id: 0,
      text: "Wyjdź z psem",
      color: "red",
      date: "2021-10-22",
      active: false,
      finishDate: null
      },
      {
        id: 1,
        text: "Poleć na marsa",
        color: "green",
        date: "2021-09-02",
        active: true,
        finishDate: null
      },{
        id: 2,
        text: "Zbuduj wehikuł czasu",
        color: "blue",
        date: "2021-07-14",
        active: true,
        finishDate: null
      }]}

  render() { 
    return ( 
        <div className="App">
          <h1>Plan your day just here, just now!</h1>
          <q>The secret of getting ahead is getting started.</q>
          <AddTask tasks={this.state.tasks}/>
          <TasksList tasks={this.state.tasks}/>
          <footer>designed and created by Bartosz Zięcina</footer>
        </div>
     );
  }
}
 
export default App;