import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Pokedex from "./screens/Pokedex"
import Home from "./screens/Home"
import PokemonDetails from "./screens/PokemonDetails"
import Nav from "./components/Nav"
import Loader from "./components/Loader"

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/details/:id`}>
            <Suspense fallback={<Loader />}>
              <PokemonDetails />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
