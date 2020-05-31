import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({ date: new Date() })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    render() {
        let CurrentTime = this.state.date.toLocaleString()

        return (
            <div>
                <h3>Current Time : {CurrentTime}</h3>
            </div>
        )
    }
}

export default Clock