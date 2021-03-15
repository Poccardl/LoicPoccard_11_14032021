import React from 'react'
import logo from '../assets/logo.svg'
import '../sass/App.scss'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <a href="...">click here and open your consol !</a>
          <p>
            Edit <code>src/components/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}