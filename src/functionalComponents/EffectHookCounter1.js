/*
****************************************************************************
- useEffect is executed after every render,
- Since its a hook so use inside a functional component always,
- Closely Replaces ComponentDidMount, ComponentWillUnmount, ComponentDidUpdate
****************************************************************************
- BUT CALLING A FUNCTION ON EVERY RENDER, will cause performance issues,
- SO use useEffect conditionally, pass another variable, for which changes
  should be monitored, if that variable doesn't change, useEffect won't execute
****************************************************************************
*/

import React, {useEffect, useState} from "react";

export default function EffectHookCounter1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Update Document title")
        document.title = `Click ${count} times`
    }, [count])

    return (
        <div>
            <input type='text'
                   value={name}
                   onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count => count + 1)}>
                Click {count} times
            </button>
        </div>
    )

}