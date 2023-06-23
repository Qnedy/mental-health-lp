import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Canvas } from '@react-three/fiber'

import './index.css'

import logo from "./assets/logo.png";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className='App-header'>
      <img src={logo} alt="Butterfly logo" className='App-logo'/>
    </header>

    <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>,
)
