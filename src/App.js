import React from 'react'
// import { BrowserRouter as Router, Switch } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Header from './shared/Header'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Home />
    </div>
  )
}

export default App
