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

export default function StateHookWithObject() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <input type="text"
                   value={name.firstName}
                   onChange={e => setName({...name, firstName : e.target.value})}
            />
            <input type="text"
                   value={name.lastName}
                   onChange={e => setName({...name, lastName : e.target.value})}
            />

            <p>First Name: {name.firstName}</p>
            <p>Last Name: {name.lastName}</p>

        </form>
    )
}