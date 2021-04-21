/*
- Mimics the behaviour of ComponentDidMount method,
by passing an empty array as 2nd argument to useEffect,
Now, useEffect will be called only once.

* */
import React, {useEffect, useState} from "react";

export default function MimicComponentDidMount() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition =(e)=> {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("Use Effect called")
        window.addEventListener('mousemove', logMousePosition)
    }, [])
    return (
        <div>
            Mouse Position=> {X} : {Y}
        </div>
    )
}