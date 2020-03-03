import React from 'react'
import './App.css'
import Home from './Home/Home'
import Schedule from './Schedule/Schedule'
import Map from './Map/Map'
import FAQ from './FAQ/FAQ'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <div className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavLink
          className='App-link'
          exact to='/'
          activeClassName='selected'
        >
          OVERVIEW
        </NavLink>
        <NavLink
          className='App-link'
          exact to='/schedule'
          activeClassName='selected'
        >
          SCHEDULE
        </NavLink>
        <NavLink
          className='App-link'
          exact to='/map'
          activeClassName='selected'
        >
          MAP
        </NavLink>
        <NavLink
          className='App-link'
          to='/faq'
          activeClassName='selected'
        >
          FAQ
        </NavLink>

      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/schedule'>
          <Schedule />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
        <Route path='/faq'>
          <FAQ />
        </Route>
      </Switch>
    </Router>
  )
}
