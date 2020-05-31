import React from "react"

class TodoItem extends React.Component {
    render() {
        const textDecoration = this.props.item.completed ? "line-through" : "none"
        const bold = this.props.item.completed ? "none" : "bold"

        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)} />
                <p style={{ textDecoration: textDecoration, fontWeight: bold }}>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem