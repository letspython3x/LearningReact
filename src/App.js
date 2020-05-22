import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke'
import jokesData from './components/jokesData'

function App() {
  // const jokes  = jokesData.map(function(joke){
  //   return <Joke question={joke.question} punchLine={joke.punchLine} />
  // })
 
  const jokes = jokesData.map(joke => <Joke key ={joke.id} question={joke.question} punchLine={joke.punchLine}/>)


  return (
    <div>
      {jokes}
    </div>
  )
}

export default App;