import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  }
  else if (hours > 12 && hours < 17) {
    timeOfDay = "evening"
  }
  else {
    timeOfDay = "night"
  }

  return (
    <div>
      <Header />
      <h1>Good {timeOfDay}</h1>
      <MainContent />
      <div class="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
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
