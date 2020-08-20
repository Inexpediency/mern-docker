import React from 'react'
import axios from 'axios'

export const ApiRequestMaker = () => {
    const makeAPIRequest = () => {
        axios.get('/api/test').then(res => {
            console.log(`Test API server result: ${res.data}`)
        })

        axios.get('/auth/test').then(res => {
            console.log(`Test AUTH server result: ${res.data}`)
        })
    }

    return <button onClick={makeAPIRequest}>Make API Request</button>
}
