import React, { Suspense } from "react"
import "./Pokedex.css"

import Input from "../components/Input"
import List from "../components/List"
import Filters from "../components/Filters"

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="pokedex-input-container">
        <Input />
      </div>
      <div className="pokedex-filters-container">
        <Filters />
      </div>
      <div className="pokedex-list-container">
        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>
      </div>
    </div>
  )
}

export default Pokedex
