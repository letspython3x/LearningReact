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