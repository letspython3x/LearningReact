import React, { Component } from 'react'

class Greetings extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "Morning"
        } else if (hours > 12 & hours < 17) {
            timeOfDay = "Evening"
        } else {
            timeOfDay = "Night"
        }

        return (<h1>Good {timeOfDay}</h1>)
    }
}

export default Greetings