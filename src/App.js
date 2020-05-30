import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div>
        <Header />
        <Greetings />
        <MainContent />
        <div className="todo-list">
          {todoItems}
        </div>
        <Footer />
      </div>)
  }
}

export default App;
