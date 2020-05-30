import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'


class App extends Component {
  render() {
    const todo = todosData.map(item => <TodoItem key={item.id} completed={item.completed} text={item.text} />)

    return (
      <div>
        <Header />
        <Greetings />
        <MainContent />
        <div className="todo-list">
          {todo}
        </div>
        <Footer />
      </div>)
  }
}

export default App;
