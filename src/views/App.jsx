import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Views import
import { Home } from './Home.jsx'
import { Lodging } from './Lodging.jsx'
import { About } from './About.jsx'
import { Error404 } from './Error404.jsx'

// Components import
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'

// SASS import
import '../sass/main.scss'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
       <Router>
         <Header />

         <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/Lodging" exact component={Lodging}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route path="/" component={Error404}></Route>
         </Switch>
        <Footer />

       </Router>
      </div>
    )
  }
}