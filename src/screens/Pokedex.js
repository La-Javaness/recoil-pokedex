import React, { Suspense } from "react"

import List from "../components/List"
import Loader from "../components/Loader"

import "./Pokedex.css"

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="pokedex-list-container">
        <Suspense fallback={<Loader />}>
          <List />
        </Suspense>
      </div>
    </div>
  )
}

export default Pokedex
