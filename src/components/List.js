import React from "react"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { fetchPokemonListSelector } from "../state/selectors"

import "./List.css"
import Pagination from "./Pagination"

const List = () => {
  const pokemonList = useRecoilValue(fetchPokemonListSelector())
  return (
    <div className="list-item-container">
      {pokemonList?.results.map((item, index) => {
        const id = item.url.split("/")[6]
        return (
          <div className="list-item-details" key={item.name}>
            <Link to={`/details/${id}`}>{item.name}'s Page</Link>
            <span>{item.name}</span>
          </div>
        )
      })}
      <Pagination
        count={pokemonList.count}
        next={pokemonList.next}
        previous={pokemonList.previous}
      />
    </div>
  )
}

export default List
