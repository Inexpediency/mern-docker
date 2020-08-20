import React from 'react'

import MessageSendingForm from '../MessageSendingForm'
import ApiRequestMaker from '../ApiRequestMaker'

import logo from './logo.svg'
import './App.css'

export function App() {
    return (
        <div className="App">
            <ApiRequestMaker />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload. Lol</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            
            <MessageSendingForm />
        </div>
    )
}
