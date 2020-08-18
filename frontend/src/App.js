import React from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

function App() {
    const makeAPIRequest = () => {
        axios.get('/auth/test').then(res => {
            console.log(`Test API server result: ${res.data}`)
        })

        axios.get('/api/test').then(res => {
            console.log(`Test AUTH server result: ${res.data}`)
        })
    }

  return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload. Lol
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        <button onClick={makeAPIRequest}>Make API Request</button>
        </div>
    )
}

export default App
