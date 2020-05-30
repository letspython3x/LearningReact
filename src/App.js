import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Abhi",
      age: "29",
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div>
        <h1>My details</h1>
        <p>
          My name is {this.state.name} and Age is {this.state.age}.
          <br />I am currently logged {this.state.isLoggedIn ? "in" : "out"}
        </p>
      </div>
    )
  }
}

export default App