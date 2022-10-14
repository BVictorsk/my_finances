import React from 'react'
import App from './app.routes'
import { BrowserRouter } from 'react-router-dom'

const Switch: React.FC = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Switch;