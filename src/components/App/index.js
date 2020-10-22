import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App/index.css';
import Artists from '../../pages/Artists'
import Home from '../../pages/Home'
import Category from '../../pages/Category'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/artists/:id'>
          <Artists />
        </Route>
        <Route path='/category/:id'>
          <Category />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;