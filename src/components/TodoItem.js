import React from "react"



class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" />
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoItem