import React, {Component} from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import Greetings from './components/Greetings'
import todosData from './components/todosData'
import Clock from './components/Clock'
import StateHookWithObject from './functionalComponents/StateHookWithObject'
import StateHookWithArray from './functionalComponents/StateHookWithArray'
import EffectHookCounter1 from './functionalComponents/EffectHookCounter1'
import MimicComponentDidMount
    from './functionalComponents/MimicComponentDidMount'
import {UserProvider} from "./components/contextComponents/userContext";
import FunContextComponent from "./functionalComponents/FunContextComponent";
import FunContextHookComponent from "./functionalComponents/FunContextHookComponent";


export const ChannelContext = React.createContext()

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log("Clicked")
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                // todo.completed = !todo.completed // BUG : we should not update state directly
                // return a brand new object, using ... object spread
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id}
                                                                 item={item}
                                                                 handleChange={this.handleChange}/>)

        return (
            <div>

                <Header/>
                <Greetings/>
                <UserProvider value="Abhishake">
                    <ChannelContext.Provider value="letspython3.x">
                        <FunContextComponent/>
                        <FunContextHookComponent/>
                    </ChannelContext.Provider>
                </UserProvider>

                <Clock/>
                <EffectHookCounter1/>
                <StateHookWithArray/>
                <StateHookWithObject/>
                <MimicComponentDidMount/>
                <div className="todo-list">
                    {todoItems}
                </div>
                <Footer/>

            </div>)
    }
}

export default App
