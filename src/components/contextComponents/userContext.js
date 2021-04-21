import React from "react";

// Default Value : Codevolution
let DEFAULT_VALUE = 'Codevolution'
const UserContext = React.createContext(DEFAULT_VALUE)

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default UserContext