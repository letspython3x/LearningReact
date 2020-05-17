import React from "react"

function Joke(props) {
    return (
        <div>
            <h4 style={{ display: props.question ? "#AA2222" : "none" }}>Question : {props.question}</h4>
            <p style={{ color: props.punchLine ? "#22AA22" : "none" }}>Answer : {props.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke