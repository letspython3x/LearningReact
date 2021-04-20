/*
****************************************************************************
- useState React Hook returns an array of 2 variables.
- 1st the current value of the state
- 2nd setter for the state variable

****************************************************************************
- State is always an object in class bases components but with useState,
  state can be of any datatype viz. bool, int, string, array, object.
- When Dealing with objects/arrays, always make sure to spread your state
  variable and then call the setter function.
****************************************************************************

*/

import React, {useState} from "react";

export default function StateHookWithArray() {
    const [items, setItem] = useState([])

    const addItem = () => {
        setItem([...items, {
            id:items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Numbers</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}