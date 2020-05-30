import React from 'react';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'


function App() {
  function create_to_do_item(item) {
    return <TodoItem key={item.id} completed={item.completed} text={item.text} />
  }
  const todo = todosData.map(create_to_do_item)

  return (
    <div>
      <Header />
      <Greetings />
      <MainContent />
      <div class="todo-list">
        {todo}
      </div>
      <Footer />
    </div>)
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
