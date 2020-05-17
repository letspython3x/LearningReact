import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke'

function App() {

  return (
    <div>
      <Joke
        punchLine="Need a one Liner Joke.."
      />

      <Joke
        question="How can you drop a raw egg onto a concrete floor without cracking it?"
        punchLine="Concrete floors are very hard to crack!"
      />
      <Joke
        question="Approximately how many birthdays does the average Indian woman have?"
        punchLine="Just one. All the others are anniversaries."
      />
      <Joke
        question="Q. How can a man go eight days without sleep?"
        punchLine="A. He sleeps at night."
      />
      <Joke
        question="What often falls but never gets hurt?"
        punchLine="Rain" />
    </div>
  )
}

export default App;