import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'
import Clock from './components/Clock'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("Clicked")
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        // todo.completed = !todo.completed // BUG : we should not update state directly
        // return a brand new object, using ... object spread
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  // Need to work on below code as it calls inside map twice
  // handleChange2(id) {
  //   console.log("Clicked")
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     })
  //     return ({ todos: updatedTodos })
  //   })
  // }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
      handleChange={this.handleChange} />)

    return (
      <div>
        <Header />
        <Greetings />
        <Clock />
        <div className="todo-list">
          {todoItems}
        </div>
        <Footer />
      </div >)
  }
}

export default App
