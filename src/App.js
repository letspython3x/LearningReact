import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'


class App extends Component {
  create_to_do_item(item) {
    return <TodoItem key={item.id} completed={item.completed} text={item.text} />
  }

  render() {
    const todo = todosData.map(this.create_to_do_item)

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
