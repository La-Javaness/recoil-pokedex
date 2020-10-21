import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Pokedex from "./screens/Pokedex"
import Home from "./screens/Home"
import Nav from "./components/Nav"

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
