import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import About from './About'
import Dog from './Dog'
import Contact from './Contact'
import './App.css'

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <NavLink activeClassName='active-link' to='/'>
            About
          </NavLink>
          <NavLink activeClassName='active-link' to='/contact'>
            Contact
          </NavLink>
          <NavLink activeClassName='active-link' to='/dog'>
            Dog
          </NavLink>

          <NavLink activeClassName='active-link' to='/dog/r'>
            Dog(r)
          </NavLink>
          <NavLink activeClassName='active-link' to='/dog/c'>
            Dog(c)
          </NavLink>
        </nav>

        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/dog/hater' component={Hater} />

          <Route exact path='/dog/c' component={() => <Dog name='Muffins' />} />
          <Route exact path='/dog/r' render={() => <Dog name='Biscuits' />} />
        </Switch>
      </div>
    )
  }
}

export default App
