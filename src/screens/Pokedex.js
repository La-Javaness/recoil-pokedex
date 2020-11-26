import React from "react"
import AsyncWrapper from "../components/AsyncWrapper"

import List from "../components/List"

import "./Pokedex.css"

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="pokedex-list-container">
        <AsyncWrapper>
          <List />
        </AsyncWrapper>
      </div>
    </div>
  )
}

export default Pokedex
