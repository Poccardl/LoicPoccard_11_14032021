import React from 'react'

// Views import
import { Routes } from './Routes.jsx'

// SASS import
import '../sass/main.scss'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Routes/>
      </div>
    )
  }
}