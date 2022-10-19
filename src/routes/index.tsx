import React from 'react'
import App from './app.routes'
import { BrowserRouter } from 'react-router-dom'

const Switch = () =>(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default Switch